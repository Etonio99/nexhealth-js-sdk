import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetInsurancePlanQueryParams,
  InsurancePlan,
  ListAllInsurancePlansQueryParams,
  ListInsurancePlansQueryParams,
} from '../../types/v2024/insurance_plans.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024InsurancePlansResource(request: RequestFunction) {
  return {
    get: (insurancePlanId: number, queryParams?: GetInsurancePlanQueryParams) =>
      request<NexHealthResponse<InsurancePlan>>(
        `insurance_plans/${insurancePlanId}`,
        'GET',
        queryParams
      ),
    list: (queryParams?: ListInsurancePlansQueryParams) =>
      request<NexHealthResponse<InsurancePlan[]>>(
        'insurance_plans',
        'GET',
        queryParams
      ),
    listAll: (queryParams?: ListAllInsurancePlansQueryParams) =>
      cursorPaginateAll<InsurancePlan>(
        request,
        'insurance_plans',
        queryParams ?? {}
      ),
  };
}
