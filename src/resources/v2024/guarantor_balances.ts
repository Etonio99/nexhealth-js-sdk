import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetGuarantorBalanceQueryParams,
  GuarantorBalance,
  ListAllGuarantorBalancesQueryParams,
  ListGuarantorBalancesQueryParams,
} from '../../types/v2024/guarantor_balances.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024GuarantorBalancesResource(request: RequestFunction) {
  return {
    get: (
      guarantorBalanceId: number,
      queryParams?: GetGuarantorBalanceQueryParams
    ) =>
      request<NexHealthResponse<GuarantorBalance>>(
        `guarantor_balances/${guarantorBalanceId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListGuarantorBalancesQueryParams) =>
      request<NexHealthResponse<GuarantorBalance[]>>(
        'guarantor_balances',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllGuarantorBalancesQueryParams) =>
      cursorPaginateAll<GuarantorBalance>(
        request,
        'guarantor_balances',
        queryParams
      ),
  };
}
