import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Charge,
  GetChargeQueryParams,
  ListAllChargesQueryParams,
  ListChargesQueryParams,
} from '../../types/v2024/charges.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024ChargesResource(request: RequestFunction) {
  return {
    get: (chargeId: number, queryParams?: GetChargeQueryParams) =>
      request<NexHealthResponse<Charge>>(
        `charges/${chargeId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListChargesQueryParams) =>
      request<NexHealthResponse<Charge[]>>('charges', 'GET', queryParams),
    listAll: (queryParams: ListAllChargesQueryParams) =>
      cursorPaginateAll<Charge>(request, 'charges', queryParams),
  };
}
