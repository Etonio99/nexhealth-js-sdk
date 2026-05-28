import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllProceduresQueryParams,
  ListProceduresQueryParams,
  Procedure,
} from '../../types/v2024/procedures.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024ProceduresResource(request: RequestFunction) {
  return {
    get: (procedureId: number) =>
      request<NexHealthResponse<Procedure>>(`procedures/${procedureId}`, 'GET'),
    list: (queryParams: ListProceduresQueryParams) =>
      request<NexHealthResponse<Procedure[]>>('procedures', 'GET', queryParams),
    listAll: (queryParams: ListAllProceduresQueryParams) =>
      cursorPaginateAll<Procedure>(request, 'procedures', queryParams),
  };
}
