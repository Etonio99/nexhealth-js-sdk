import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Adjustment,
  CreateAdjustmentBodyParams,
  CreateAdjustmentQueryParams,
  GetAdjustmentQueryParams,
  ListAdjustmentsQueryParams,
  ListAllAdjustmentsQueryParams,
} from '../../types/v2024/adjustments.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024AdjustmentsResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateAdjustmentQueryParams,
      bodyParams: CreateAdjustmentBodyParams
    ) =>
      request<NexHealthResponse<Adjustment>>(
        'adjustments',
        'POST',
        queryParams,
        bodyParams
      ),
    get: (adjustmentId: number, queryParams?: GetAdjustmentQueryParams) =>
      request<NexHealthResponse<Adjustment>>(
        `adjustments/${adjustmentId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListAdjustmentsQueryParams) =>
      request<NexHealthResponse<Adjustment[]>>(
        'adjustments',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllAdjustmentsQueryParams) =>
      cursorPaginateAll<Adjustment>(request, 'adjustments', queryParams),
  };
}
