import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetOperatoryQueryParams,
  ListAllOperatoriesQueryParams,
  ListOperatoriesQueryParams,
  Operatory,
} from '../../types/v2/operatories.js';
import { paginateAll } from '../pagination.js';

export function V2OperatoriesResource(request: RequestFunction) {
  return {
    get: (operatoryId: number, queryParams: GetOperatoryQueryParams) =>
      request<NexHealthApiResponse<Operatory>>(
        `operatories/${operatoryId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListOperatoriesQueryParams) =>
      request<NexHealthApiResponse<Operatory[]>>(
        'operatories',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllOperatoriesQueryParams) =>
      paginateAll(
        request,
        'operatories',
        queryParams,
        (data: Operatory[]) => data,
        (operatories) => operatories
      ),
  };
}
