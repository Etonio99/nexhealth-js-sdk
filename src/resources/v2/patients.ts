import type { NexHealthApiResponse } from "../../types/v2/base.js";
import type {
    Patient,
    GetPatientParams,
    CreatePatientBody,
} from "../../types/v2/patients.js";

import type { RequestFunction } from "../../types/common.js";

export class PatientsResource {
    constructor(private request: RequestFunction) {}

    getPatient(id: number, params: GetPatientParams): Promise<NexHealthApiResponse<Patient>> {
        return this.request(`patients/${id}`, 'GET', params);
    }

    getPatients(queryParams: { subdomain: string, location_id: number }): Promise<NexHealthApiResponse<Patient[]>> {
        return this.request(`patients`, 'GET', queryParams);
    }

    create(body: CreatePatientBody): Promise<NexHealthApiResponse<Patient>> {
        return this.request('patients', 'POST', body);
    }
}
