import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllTreatmentPlansQueryParams,
  ListTreatmentPlansQueryParams,
  TreatmentPlan,
} from '../../types/v2024/treatment_plans.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024TreatmentPlansResource(request: RequestFunction) {
  return {
    get: (treatmentPlanId: number) =>
      request<NexHealthResponse<TreatmentPlan>>(
        `treatment_plans/${treatmentPlanId}`,
        'GET'
      ),
    list: (queryParams?: ListTreatmentPlansQueryParams) =>
      request<NexHealthResponse<TreatmentPlan[]>>(
        'treatment_plans',
        'GET',
        queryParams
      ),
    listAll: (queryParams?: ListAllTreatmentPlansQueryParams) =>
      cursorPaginateAll<TreatmentPlan>(
        request,
        'treatment_plans',
        queryParams ?? {}
      ),
  };
}
