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
import { V2Constants } from './constants.js';
import { NexHealthAPIError } from '../../error.js';
import type { InsuranceCoverage } from '../../types/v2/insurance_plans.js';

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
    get: (patientId: number, queryParams: GetPatientQueryParams) =>
      request<NexHealthApiResponse<Patient>>(
        `patients/${patientId}`,
        'GET',
        queryParams
      ),
    getInsuranceCoverages: (
      patientId: number,
      queryParams: GetPatientInsuranceCoveragesQueryParams
    ) =>
      request<NexHealthApiResponse<InsuranceCoverage>>(
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
    listAll: async (
      queryParams: ListAllPatientsQueryParams
    ): Promise<NexHealthApiResponse<{ patients: Patient[] }>> => {
      let hasNextPage = true;
      const patients: Patient[] = [];

      let count = 0;
      let setCount = false;

      let currentPage = 0;

      while (hasNextPage) {
        currentPage++;

        const requestParams: ListPatientsQueryParams = {
          per_page: V2Constants.MAX_PER_PAGE,
          page: currentPage,
          ...queryParams,
        };

        const response = await request<
          NexHealthApiResponse<{ patients: Patient[] }>
        >('patients', 'GET', requestParams);

        if (response.code) {
          if (response.count && !setCount) {
            count = response.count;
            setCount = true;
          }

          if (response.data) {
            patients.push(...response.data.patients);
          }
        } else {
          throw new NexHealthAPIError();
        }

        hasNextPage = currentPage * V2Constants.MAX_PER_PAGE < count;
      }

      return {
        code: true,
        data: { patients },
        count,
      } as NexHealthApiResponse<{ patients: Patient[] }>;
    },
  };
}
