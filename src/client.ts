import { NexHealthAPIError } from "./error.js";
import type { AuthenticatesData } from "./types/v2/authenticates.js";
import type { NexHealthApiResponse } from "./types/v2/base.js";

import type { Method } from "./types/common.js";
import type { GetPatientParams } from "./types/v2/patients.js";

export class NexHealthClient {
    private apiKey: string;
    private bearerToken: string | null = null;
    private tokenExpiry: number = 0;

    // readonly v2: V2Resources;

    private baseURL = 'https://nexhealth.info/';

    constructor(apiKey: string) {
        this.apiKey = apiKey;

        // this.v2 = new V2Resources(this.request.bind(this));
    }

    private async getBearerToken(): Promise<string | null> {
        if (this.bearerToken && Date.now() < this.tokenExpiry) {
            return this.bearerToken;
        }

        const response = await this.request<NexHealthApiResponse<AuthenticatesData>>('authenticates', 'POST', null, null, this.apiKey);
        if (!response.code || !response.data) {
            return null;
        }

        this.bearerToken = response.data.token;
        this.tokenExpiry = Date.now() + 3_600_000;

        return this.bearerToken;
    }

    private async request<T>(endpoint: string, method: Method = 'GET', queryParams?: any, data?: any, token?: string, headers?: Record<string, string>): Promise<T> {
        const params = new URLSearchParams(queryParams);
        const url = `${this.baseURL}${endpoint}${queryParams ? `?${params.toString()}` : ""}`;

        const resolveToken = async (): Promise<string | null> => {
            if (token) return token;
            const bearerToken = await this.getBearerToken();
            return `Bearer ${bearerToken}`;
        }

        const resolvedToken = await resolveToken();
        if (!resolvedToken) {
            throw new NexHealthAPIError('Failed to authenticate');
        }

        const response = await fetch(url, {
            method,
            headers: {
                'Authorization': resolvedToken,
                'accept': 'application/vnd.Nexhealth+json;version=2',
                ...headers,
            },
            body: data ? JSON.stringify(data) : null,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => undefined);
            throw new NexHealthAPIError(
                `HTTP ${response.status}: ${response.statusText}`,
                response.status,
                errorData,
            );
        }

        return response.json() as Promise<T>;
    }

    readonly v2 = {
        patients: {
            get: (patientId: number, params: {
                subdomain: string
            }) => this.request(`patients/${patientId}`, 'GET', params),
            list: (params: {
                subdomain: string,
                location_id: number
            }) => this.request("patients", 'GET', params),
            //TODO: listAll iterates through each page
        }
    }

    readonly v2024 = {
        patients: {
            get: (patientId: number, params: {
                subdomain: string
            }) => this.request(`patients/${patientId}`, 'GET', params, undefined, undefined, { 'Nex-Api-Version': 'v20240412' }),
        }
    }
}