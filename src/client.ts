import { NexHealthAPIError } from "./error.js";
import type { AuthenticatesData } from "./types/v2/authenticates.js";
import type { NexHealthApiResponse } from "./types/base.js";
import type { Method } from "./types/common.js";
import { V2Resources } from "./resources/v2/index.js";
import { V2024Resources } from "./resources/v2024/index.js";

export class NexHealthClient {
    private apiKey: string;
    private bearerToken: string | null = null;
    private tokenExpiry: number = 0;

    private baseURL = "https://nexhealth.info/";

    readonly v2: V2Resources;
    readonly v2024: V2024Resources;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        
        this.v2 = new V2Resources(
            (endpoint, method, queryParams, data) => this.request(endpoint, method, queryParams, data)
        );
        this.v2024 = new V2024Resources(
            (endpoint, method, queryParams, data) => this.request(endpoint, method, queryParams, data, { "Nex-Api-Version" : "v20240412" })
        );
    }

    private async getBearerToken(): Promise<string | null> {
        if (this.bearerToken && Date.now() < this.tokenExpiry) {
            return this.bearerToken;
        }

        const url = `${this.baseURL}authenticates`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": this.apiKey,
                "accept": "application/vnd.Nexhealth+json;version=2",
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

    private buildQueryString(params: Record<string, any>): string {
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

    private async request<T>(endpoint: string, method: Method = "GET", queryParams?: any, bodyParams?: any, headers?: Record<string, string>): Promise<T> {
        const url = `${this.baseURL}${endpoint}${queryParams ? `?${this.buildQueryString(queryParams)}` : ""}`;

        const resolveToken = async (): Promise<string | null> => {
            const bearerToken = await this.getBearerToken();
            return bearerToken ? `Bearer ${bearerToken}` : null;
        }

        const resolvedToken = await resolveToken();
        if (!resolvedToken) {
            throw new NexHealthAPIError("Failed to authenticate");
        }

        const finalHeaders: Record<string, string> = {
            "Authorization": resolvedToken,
            "accept": "application/vnd.Nexhealth+json;version=2",
            ...headers,
        }

        if (bodyParams) {
            finalHeaders["content-type"] = "application/json";
        }

        const response = await fetch(url, {
            method,
            headers: finalHeaders,
            body: bodyParams ? JSON.stringify(bodyParams) : null,
        });

        const parsed = await response.json();

        if ("code" in parsed) {
            return parsed as T;
        }

        throw new NexHealthAPIError("Unexpected response format from NexHealth API", response.status);
    }
}
