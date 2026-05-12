import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetRecallTypeQueryParams,
  ListRecallTypesQueryParams,
  RecallType,
} from '../../types/v2/recall_types.js';

export function V2RecallTypesResource(request: RequestFunction) {
  return {
    get: (patientRecallId: number, queryParams: GetRecallTypeQueryParams) =>
      request<NexHealthApiResponse<RecallType>>(
        `recall_types/${patientRecallId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListRecallTypesQueryParams) =>
      request<NexHealthApiResponse<RecallType[]>>(
        'recall_types',
        'GET',
        queryParams
      ),
  };
}
