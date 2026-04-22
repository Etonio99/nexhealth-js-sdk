import type { NexHealthApiResponse } from "../../types/base.js";
import type {
    GetPatientParams,
    ListAllPatientsParams,
    ListPatientsParams,
    Patient,
} from "../../types/v2/patients.js";

import type { RequestFunction } from "../../types/common.js";
import { V2Constants } from "./constants.js";
import { NexHealthAPIError } from "../../error.js";

export function V2PatientsResource(request: RequestFunction) {
    return {
        get: (patientId: number, params: GetPatientParams) => request<NexHealthApiResponse<Patient>>(`patients/${patientId}`, "GET", params),
        list: (params: ListPatientsParams) => request<NexHealthApiResponse<{ patients: Patient[] }>>("patients", "GET", params),
        listAll: async (params: ListAllPatientsParams): Promise<NexHealthApiResponse<{ patients: Patient[] }>> => {
            let hasNextPage = true;
            const patients: Patient[] = [];

            let count = -1;
            let currentPage = 0;

            while (hasNextPage) {
                currentPage++;

                const requestParams: ListPatientsParams = {
                    per_page: V2Constants.MAX_PER_PAGE,
                    page: currentPage,
                    ...params,
                }

                const response = await request<NexHealthApiResponse<{ patients: Patient[] }>>("patients", "GET", requestParams);

                if (response.code && response.data) {
                    if (response.count && count === -1) {
                        count = response.count;
                    }

                    if (response.data) {
                        patients.push(...response.data.patients);
                    }
                }
                else {
                    throw new NexHealthAPIError();
                }

                hasNextPage = currentPage * V2Constants.MAX_PER_PAGE < count;
            }

            return {
                code: true,
                data: { patients },
                count,
            } as NexHealthApiResponse<{ patients: Patient[] }>;
        }
    }
}
