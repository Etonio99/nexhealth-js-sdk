import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllOperatoriesQueryParams,
  ListOperatoriesQueryParams,
  Operatory,
} from '../../types/v2024/operatories.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024OperatoriesResource(request: RequestFunction) {
  return {
    list: (queryParams: ListOperatoriesQueryParams) =>
      request<NexHealthResponse<Operatory[]>>(
        'operatories',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllOperatoriesQueryParams) =>
      cursorPaginateAll<Operatory>(request, 'operatories', queryParams),
  };
}
