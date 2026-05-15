import { NexHealthAPIError } from './error.js';
import type { AuthenticatesData } from './types/v2/authenticates.js';
import type { NexHealthApiResponse, NexHealthResponse } from './types/base.js';
import type { Method } from './types/common.js';
import { createV2Resources, type V2Resources } from './resources/v2/index.js';
import {
  createV2024Resources,
  type V2024Resources,
} from './resources/v2024/index.js';

export class NexHealthClient {
  private apiKey: string;
  private _subdomain: string | undefined;
  private bearerToken: string | null = null;
  private tokenExpiry: number = 0;

  private baseURL = 'https://nexhealth.info/';

  readonly v2: V2Resources;
  readonly v2024: V2024Resources;

  get subdomain(): string | undefined {
    return this._subdomain;
  }

  set subdomain(value: string | undefined) {
    this._subdomain = value;
  }

  clearSubdomain(): void {
    this._subdomain = undefined;
  }

  constructor({ apiKey, subdomain }: { apiKey: string; subdomain?: string }) {
    this.apiKey = apiKey;
    this._subdomain = subdomain;

    this.v2 = createV2Resources((endpoint, method, queryParams, data) =>
      this.request(endpoint, method, queryParams, data)
    );
    this.v2024 = createV2024Resources((endpoint, method, queryParams, data) =>
      this.request(endpoint, method, queryParams, data, {
        'Nex-Api-Version': 'v20240412',
      })
    );
  }

  private async getBearerToken(): Promise<string | null> {
    if (this.bearerToken && Date.now() < this.tokenExpiry) {
      return this.bearerToken;
    }

    const url = `${this.baseURL}authenticates`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: this.apiKey,
        accept: 'application/vnd.Nexhealth+json;version=2',
      },
    });

    if (!response.ok) {
      return null;
    }

    const data: NexHealthApiResponse<AuthenticatesData> = await response.json();

    if (!data.code || !data.data) {
      return null;
    }

    this.bearerToken = data.data.token;
    this.tokenExpiry = Date.now() + 3_600_000;

    return this.bearerToken;
  }

  private buildQueryString(params: Record<string, unknown>): string {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          searchParams.append(`${key}[]`, String(item));
        }
      } else if (value != null) {
        searchParams.append(key, String(value));
      }
    }
    return searchParams.toString();
  }

  private async request<T>(
    endpoint: string,
    method: Method = 'GET',
    queryParams?: unknown,
    bodyParams?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    const mergedParams = {
      ...(this._subdomain ? { subdomain: this._subdomain } : {}),
      ...((queryParams as Record<string, unknown>) ?? {}),
    };
    const queryString = this.buildQueryString(mergedParams);
    const url = `${this.baseURL}${endpoint}${queryString ? `?${queryString}` : ''}`;

    const resolveToken = async (): Promise<string | null> => {
      const bearerToken = await this.getBearerToken();
      return bearerToken ? `Bearer ${bearerToken}` : null;
    };

    const resolvedToken = await resolveToken();
    if (!resolvedToken) {
      throw new NexHealthAPIError('Failed to authenticate');
    }

    const finalHeaders: Record<string, string> = {
      Authorization: resolvedToken,
      accept: 'application/vnd.Nexhealth+json;version=2',
      ...headers,
    };

    if (bodyParams && !(bodyParams instanceof FormData)) {
      finalHeaders['content-type'] = 'application/json';
    }

    const getBody = () => {
      if (!bodyParams) return null;
      if (bodyParams instanceof FormData) return bodyParams;
      return JSON.stringify(bodyParams);
    };
    const body = getBody();

    const response = await fetch(url, {
      method,
      headers: finalHeaders,
      body,
    });

    if (response.status === 204) {
      const response = {
        data: null,
      } as NexHealthResponse<null>;
      return response as T;
    }

    let parsed: unknown;

    try {
      parsed = await response.json();
    } catch {
      throw new NexHealthAPIError(
        'Invalid response from NexHealth API',
        response.status
      );
    }

    if (typeof parsed !== 'object' || parsed === null || !('code' in parsed)) {
      throw new NexHealthAPIError(
        'Unexpected response format from NexHealth API',
        response.status
      );
    }

    if (!parsed.code) {
      const body = parsed as NexHealthApiResponse<never>;
      const errors = body.error ?? [];
      const message = errors[0] ?? body.description ?? 'NexHealth API error';
      throw new NexHealthAPIError(
        message,
        response.status,
        errors,
        body.description ?? null
      );
    }

    const raw = parsed as NexHealthApiResponse<unknown>;
    return { data: raw.data, count: raw.count, page_info: raw.page_info } as T;
  }
}
