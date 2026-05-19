import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllPatientRecallsQueryParams,
  ListPatientRecallsQueryParams,
  PatientRecall,
} from '../../types/v2024/patient_recalls.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024PatientRecallsResource(request: RequestFunction) {
  return {
    list: (queryParams: ListPatientRecallsQueryParams) =>
      request<NexHealthResponse<PatientRecall[]>>(
        'patient_recalls',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllPatientRecallsQueryParams) =>
      cursorPaginateAll<PatientRecall>(request, 'patient_recalls', queryParams),
  };
}
