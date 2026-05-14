import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllPatientRecallsQueryParams,
  ListPatientRecallsQueryParams,
  PatientRecall,
} from '../../types/v2/patient_recalls.js';
import { paginateAll } from '../pagination.js';

export function V2PatientRecallsResource(request: RequestFunction) {
  return {
    get: (patientRecallId: number) =>
      request<NexHealthResponse<PatientRecall>>(
        `patient_recalls/${patientRecallId}`
      ),
    list: (queryParams: ListPatientRecallsQueryParams) =>
      request<NexHealthResponse<PatientRecall[]>>(
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
