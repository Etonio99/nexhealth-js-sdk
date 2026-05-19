import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  FeeSchedule,
  GetFeeScheduleQueryParams,
  ListAllFeeSchedulesQueryParams,
  ListFeeSchedulesQueryParams,
} from '../../types/v2024/fee_schedules.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024FeeSchedulesResource(request: RequestFunction) {
  return {
    get: (feeScheduleId: number, queryParams?: GetFeeScheduleQueryParams) =>
      request<NexHealthResponse<FeeSchedule>>(
        `fee_schedules/${feeScheduleId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListFeeSchedulesQueryParams) =>
      request<NexHealthResponse<FeeSchedule[]>>(
        'fee_schedules',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllFeeSchedulesQueryParams) =>
      cursorPaginateAll<FeeSchedule>(request, 'fee_schedules', queryParams),
  };
}
