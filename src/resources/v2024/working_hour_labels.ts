import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllWorkingHourLabelsQueryParams,
  ListWorkingHourLabelsQueryParams,
  WorkingHourLabel,
} from '../../types/v2024/working_hour_labels.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024WorkingHourLabelsResource(request: RequestFunction) {
  return {
    list: (queryParams?: ListWorkingHourLabelsQueryParams) =>
      request<NexHealthResponse<WorkingHourLabel[]>>(
        'working_hour_labels',
        'GET',
        queryParams
      ),
    listAll: (queryParams?: ListAllWorkingHourLabelsQueryParams) =>
      cursorPaginateAll<WorkingHourLabel>(
        request,
        'working_hour_labels',
        queryParams ?? {}
      ),
  };
}
