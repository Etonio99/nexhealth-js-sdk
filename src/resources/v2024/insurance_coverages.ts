import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  InsuranceCoverage,
  ListAllInsuranceCoveragesQueryParams,
  ListInsuranceCoveragesQueryParams,
} from '../../types/v2024/insurance_coverages.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024InsuranceCoveragesResource(request: RequestFunction) {
  return {
    get: (insuranceCoverageId: number) =>
      request<NexHealthResponse<InsuranceCoverage>>(
        `insurance_coverages/${insuranceCoverageId}`,
        'GET'
      ),
    list: (queryParams: ListInsuranceCoveragesQueryParams) =>
      request<NexHealthResponse<InsuranceCoverage[]>>(
        'insurance_coverages',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllInsuranceCoveragesQueryParams) =>
      cursorPaginateAll<InsuranceCoverage>(
        request,
        'insurance_coverages',
        queryParams
      ),
  };
}
