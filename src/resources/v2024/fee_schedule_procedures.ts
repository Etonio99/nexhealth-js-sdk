import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  FeeScheduleProcedure,
  ListAllFeeScheduleProceduresQueryParams,
  ListFeeScheduleProceduresQueryParams,
} from '../../types/v2024/fee_schedule_procedures.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024FeeScheduleProceduresResource(request: RequestFunction) {
  return {
    list: (queryParams: ListFeeScheduleProceduresQueryParams) =>
      request<NexHealthResponse<FeeScheduleProcedure[]>>(
        'fee_schedule_procedures',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllFeeScheduleProceduresQueryParams) =>
      cursorPaginateAll<FeeScheduleProcedure>(
        request,
        'fee_schedule_procedures',
        queryParams
      ),
  };
}
