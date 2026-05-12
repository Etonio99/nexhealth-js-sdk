import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllNexStaffQueryParams,
  ListNexStaffQueryParams,
  NexStaff,
} from '../../types/v2/nex_staff.js';
import { paginateAll } from '../pagination.js';

export function V2NexStaffResource(request: RequestFunction) {
  return {
    list: (queryParams: ListNexStaffQueryParams) =>
      request<NexHealthApiResponse<NexStaff[]>>(
        'procedures',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllNexStaffQueryParams) =>
      paginateAll(
        request,
        'procedures',
        queryParams,
        (data: NexStaff[]) => data,
        (nexStaff) => nexStaff
      ),
  };
}
