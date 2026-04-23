import type { NexHealthApiResponse } from "../../types/base.js";
import type {
    ListAllPatientsParams,
    ListPatientsParams,
    Patient,
} from "../../types/v2024/patients.js";

import type { RequestFunction } from "../../types/common.js";
import { V2024Constants } from "./constants.js";
import { NexHealthAPIError } from "../../error.js";

export function V2024PatientsResource(request: RequestFunction) {
    return {
        get: (patientId: number, params: {
            subdomain: string
        }) => request<NexHealthApiResponse<Patient>>(`patients/${patientId}`, 'GET', params, ),
        list: (params: {
            subdomain: string,
            location_id: number
        }) => request<NexHealthApiResponse<Patient[]>>("patients", 'GET', params),
        listAll: async (params: ListAllPatientsParams): Promise<NexHealthApiResponse<Patient[]>> => {
                    let hasNextPage = true;
                    const patients: Patient[] = [];
        
                    let endCursor: string | undefined;
                    let count = 0;
                        
                    while (hasNextPage) {
                        const requestParams: ListPatientsParams = {
                            per_page: V2024Constants.MAX_PER_PAGE,
                            ...params,
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
