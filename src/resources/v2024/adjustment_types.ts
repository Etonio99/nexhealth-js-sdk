import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  AdjustmentType,
  ListAdjustmentTypesQueryParams,
  ListAllAdjustmentTypesQueryParams,
} from '../../types/v2024/adjustment_types.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024AdjustmentTypesResource(request: RequestFunction) {
  return {
    get: (adjustmentTypeId: number) =>
      request<NexHealthResponse<AdjustmentType>>(
        `adjustment_types/${adjustmentTypeId}`,
        'GET'
      ),
    list: (queryParams: ListAdjustmentTypesQueryParams) =>
      request<NexHealthResponse<AdjustmentType[]>>(
        'adjustment_types',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllAdjustmentTypesQueryParams) =>
      cursorPaginateAll<AdjustmentType>(
        request,
        'adjustment_types',
        queryParams
      ),
  };
}
