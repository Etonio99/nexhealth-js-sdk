import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreateWorkingHourBodyParams,
  CreateWorkingHourQueryParams,
  GetWorkingHourQueryParams,
  ListAllWorkingHoursQueryParams,
  ListWorkingHoursQueryParams,
  UpdateWorkingHourBodyParams,
  WorkingHour,
} from '../../types/v2024/working_hours.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024WorkingHoursResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateWorkingHourQueryParams,
      bodyParams: CreateWorkingHourBodyParams
    ) =>
      request<NexHealthResponse<WorkingHour>>(
        'working_hours',
        'POST',
        queryParams,
        bodyParams
      ),
    delete: (workingHourId: number) =>
      request<null>(`working_hours/${workingHourId}`, 'DELETE'),
    update: (workingHourId: number, bodyParams?: UpdateWorkingHourBodyParams) =>
      request<NexHealthResponse<WorkingHour>>(
        `working_hours/${workingHourId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
    get: (workingHourId: number, queryParams?: GetWorkingHourQueryParams) =>
      request<NexHealthResponse<WorkingHour>>(
        `working_hours/${workingHourId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListWorkingHoursQueryParams) =>
      request<NexHealthResponse<WorkingHour[]>>(
        'working_hours',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllWorkingHoursQueryParams) =>
      cursorPaginateAll<WorkingHour>(request, 'working_hours', queryParams),
  };
}
