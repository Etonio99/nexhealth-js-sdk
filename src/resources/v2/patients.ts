import type { NexHealthApiResponse } from "../../types/base.js";
import type {
    Patient,
    GetPatientParams,
    CreatePatientBody,
} from "../../types/v2/patients.js";

import type { RequestFunction } from "../../types/common.js";

export function V2PatientsResource(request: RequestFunction) {
    return {
        get: (patientId: number, params: {
            subdomain: string
        }) => request<NexHealthApiResponse<Patient>>(`patients/${patientId}`, 'GET', params),
        list: (params: {
            subdomain: string,
            location_id: number
        }) => request<NexHealthApiResponse<Patient[]>>("patients", 'GET', params),
        //TODO: listAll iterates through each page
    }
}
