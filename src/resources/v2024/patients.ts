import type { NexHealthResponse } from '../../types/base.js';
import type {
  CreatePatientBodyParams,
  CreatePatientQueryParams,
  GetPatientQueryParams,
  ListAllPatientsQueryParams,
  ListPatientsQueryParams,
  Patient,
} from '../../types/v2024/patients.js';

import type { RequestFunction } from '../../types/common.js';
import { V2024Constants } from './constants.js';

export function V2024PatientsResource(request: RequestFunction) {
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
      request<NexHealthResponse<Patient[]>>('patients', 'GET', queryParams),
    listAll: async (
      queryParams: ListAllPatientsQueryParams
    ): Promise<NexHealthResponse<Patient[]>> => {
      let hasNextPage = true;
      const patients: Patient[] = [];

      let endCursor: string | undefined;
      let count = 0;

      while (hasNextPage) {
        const requestParams: ListPatientsQueryParams = {
          per_page: V2024Constants.MAX_PER_PAGE,
          ...queryParams,
        };
        if (endCursor) {
          requestParams['end_cursor'] = endCursor;
        }

        const response = await request<NexHealthResponse<Patient[]>>(
          'patients',
          'GET',
          requestParams
        );

        if (response.data != null) {
          patients.push(...response.data);
          count += response.data.length;
        }
        if (response.page_info) {
          hasNextPage = response.page_info.has_next_page;
          endCursor = response.page_info.end_cursor;
        } else {
          hasNextPage = false;
        }
      }

      return { data: patients, count };
    },
  };
}
