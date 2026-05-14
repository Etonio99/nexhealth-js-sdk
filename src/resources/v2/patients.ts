import type { NexHealthApiResponse } from '../../types/base.js';
import type {
  CreatePatientBodyParams,
  CreatePatientQueryParams,
  GetPatientInsuranceCoveragesQueryParams,
  GetPatientQueryParams,
  ListAllPatientsQueryParams,
  ListPatientsQueryParams,
  Patient,
} from '../../types/v2/patients.js';

import type { RequestFunction } from '../../types/common.js';
import type { InsuranceCoverage } from '../../types/v2/insurance_plans.js';
import { paginateAll } from '../pagination.js';

export function V2PatientsResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreatePatientQueryParams,
      bodyParams: CreatePatientBodyParams
    ) =>
      request<NexHealthApiResponse<{ user: Patient }>>(
        'patients',
        'POST',
        queryParams,
        bodyParams
      ),
    get: (patientId: number, queryParams?: GetPatientQueryParams) =>
      request<NexHealthApiResponse<Patient>>(
        `patients/${patientId}`,
        'GET',
        queryParams
      ),
    getInsuranceCoverages: (
      patientId: number,
      queryParams?: GetPatientInsuranceCoveragesQueryParams
    ) =>
      request<NexHealthApiResponse<InsuranceCoverage[]>>(
        `patients/${patientId}/insurance_coverages`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListPatientsQueryParams) =>
      request<NexHealthApiResponse<{ patients: Patient[] }>>(
        'patients',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllPatientsQueryParams) =>
      paginateAll(
        request,
        'patients',
        queryParams,
        (data: { patients: Patient[] }) => data.patients,
        (patients) => ({ patients })
      ),
  };
}
