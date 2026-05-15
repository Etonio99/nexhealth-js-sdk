import type { NexHealthResponse } from '../../types/base.js';
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
      request<NexHealthResponse<{ user: Patient }>>(
        'patients',
        'POST',
        queryParams,
        bodyParams
      ),
    get: (patientId: number, queryParams?: GetPatientQueryParams) =>
      request<NexHealthResponse<Patient>>(
        `patients/${patientId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListPatientsQueryParams) =>
      request<NexHealthResponse<{ patients: Patient[] }>>(
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
    insuranceCoverages: {
      list: (
        patientId: number,
        queryParams?: GetPatientInsuranceCoveragesQueryParams
      ) =>
        request<NexHealthResponse<InsuranceCoverage[]>>(
          `patients/${patientId}/insurance_coverages`,
          'GET',
          queryParams
        ),
    },
  };
}
