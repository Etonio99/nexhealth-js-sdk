import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  InsuranceBalance,
  ListAllInsuranceBalancesQueryParams,
  ListInsuranceBalancesQueryParams,
} from '../../types/v2024/insurance_balances.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024InsuranceBalancesResource(request: RequestFunction) {
  return {
    get: (insuranceBalanceId: number) =>
      request<NexHealthResponse<InsuranceBalance>>(
        `insurance_balances/${insuranceBalanceId}`,
        'GET'
      ),
    list: (queryParams: ListInsuranceBalancesQueryParams) =>
      request<NexHealthResponse<InsuranceBalance[]>>(
        'insurance_balances',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllInsuranceBalancesQueryParams) =>
      cursorPaginateAll<InsuranceBalance>(
        request,
        'insurance_balances',
        queryParams
      ),
  };
}
