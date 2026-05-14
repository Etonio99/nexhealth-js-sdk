import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListRecallTypesQueryParams,
  RecallType,
} from '../../types/v2/recall_types.js';

export function V2RecallTypesResource(request: RequestFunction) {
  return {
    get: (patientRecallId: number) =>
      request<NexHealthApiResponse<RecallType>>(
        `recall_types/${patientRecallId}`
      ),
    list: (queryParams: ListRecallTypesQueryParams) =>
      request<NexHealthApiResponse<RecallType[]>>(
        'recall_types',
        'GET',
        queryParams
      ),
  };
}
