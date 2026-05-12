import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllProceduresQueryParams,
  ListProceduresQueryParams,
  Procedure,
} from '../../types/v2/procedures.js';
import { paginateAll } from '../pagination.js';

export function V2ProceduresResource(request: RequestFunction) {
  return {
    list: (queryParams: ListProceduresQueryParams) =>
      request<NexHealthApiResponse<Procedure[]>>(
        'procedures',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllProceduresQueryParams) =>
      paginateAll(
        request,
        'procedures',
        queryParams,
        (data: Procedure[]) => data,
        (procedures) => procedures
      ),
  };
}
