import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetPatientRecallQueryParams,
  ListAllPatientRecallsQueryParams,
  ListPatientRecallsQueryParams,
  PatientRecall,
} from '../../types/v2/patient_recalls.js';
import { paginateAll } from '../pagination.js';

export function V2PatientRecallsResource(request: RequestFunction) {
  return {
    get: (patientRecallId: number, queryParams: GetPatientRecallQueryParams) =>
      request<NexHealthApiResponse<PatientRecall>>(
        `patient_recalls/${patientRecallId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListPatientRecallsQueryParams) =>
      request<NexHealthApiResponse<PatientRecall[]>>(
        'patient_recalls',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllPatientRecallsQueryParams) =>
      paginateAll(
        request,
        'patient_recalls',
        queryParams,
        (data: PatientRecall[]) => data,
        (procedures) => procedures
      ),
  };
}
