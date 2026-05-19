import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetInsuranceClaimQueryParams,
  InsuranceClaim,
  ListAllInsuranceClaimsQueryParams,
  ListInsuranceClaimsQueryParams,
} from '../../types/v2024/insurance_claims.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024InsuranceClaimsResource(request: RequestFunction) {
  return {
    get: (claimId: number, queryParams?: GetInsuranceClaimQueryParams) =>
      request<NexHealthResponse<InsuranceClaim>>(
        `claims/${claimId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListInsuranceClaimsQueryParams) =>
      request<NexHealthResponse<InsuranceClaim[]>>(
        'claims',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllInsuranceClaimsQueryParams) =>
      cursorPaginateAll<InsuranceClaim>(request, 'claims', queryParams),
  };
}
