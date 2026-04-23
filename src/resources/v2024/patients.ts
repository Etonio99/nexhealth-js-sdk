import type { NexHealthApiResponse } from "../../types/base.js";
import type {
    CreatePatientBodyParams,
    CreatePatientQueryParams,
    GetPatientQueryParams,
    ListAllPatientsQueryParams,
    ListPatientsQueryParams,
    Patient,
} from "../../types/v2024/patients.js";

import type { RequestFunction } from "../../types/common.js";
import { V2024Constants } from "./constants.js";
import { NexHealthAPIError } from "../../error.js";

export function V2024PatientsResource(request: RequestFunction) {
    return {
        create: (queryParams: CreatePatientQueryParams, bodyParams: CreatePatientBodyParams) => request<NexHealthApiResponse<{ user: Patient }>>("patients", "POST", queryParams, bodyParams),
        get: (patientId: number, queryParams: GetPatientQueryParams) => request<NexHealthApiResponse<Patient>>(`patients/${patientId}`, 'GET', queryParams),
        list: (queryParams: ListPatientsQueryParams) => request<NexHealthApiResponse<Patient[]>>("patients", 'GET', queryParams),
        listAll: async (queryParams: ListAllPatientsQueryParams): Promise<NexHealthApiResponse<Patient[]>> => {
            let hasNextPage = true;
            const patients: Patient[] = [];

            let endCursor: string | undefined;
            let count = 0;

            while (hasNextPage) {
                const requestParams: ListPatientsQueryParams = {
                    per_page: V2024Constants.MAX_PER_PAGE,
                    ...queryParams,
                }
                if (endCursor) {
                    requestParams["end_cursor"] = endCursor;
                }

                const response = await request<NexHealthApiResponse<Patient[]>>("patients", "GET", requestParams);

                if (response.code) {
                    if (response.data) {
                        patients.push(...response.data);
                        count += response.data.length;
                    }
                    if (response.page_info) {
                        hasNextPage = response.page_info.has_next_page;
                        endCursor = response.page_info.end_cursor;
                    }
                }
                else {
                    throw new NexHealthAPIError();
                }
            }

            return {
                code: true,
                data: patients,
                count,
            } as NexHealthApiResponse<Patient[]>;
        }
    }
}
