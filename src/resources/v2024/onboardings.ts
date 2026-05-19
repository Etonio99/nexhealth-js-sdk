import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreateOnboardingBodyParams,
  ListAllOnboardingsQueryParams,
  ListOnboardingsQueryParams,
  Onboarding,
} from '../../types/v2024/onboardings.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024OnboardingsResource(request: RequestFunction) {
  return {
    create: (bodyParams: CreateOnboardingBodyParams) =>
      request<NexHealthResponse<Onboarding>>(
        'onboardings',
        'POST',
        undefined,
        bodyParams
      ),
    get: (onboardingId: string) =>
      request<NexHealthResponse<Onboarding>>(
        `onboardings/${onboardingId}`,
        'GET'
      ),
    list: (queryParams?: ListOnboardingsQueryParams) =>
      request<NexHealthResponse<Onboarding[]>>(
        'onboardings',
        'GET',
        queryParams
      ),
    listAll: (queryParams?: ListAllOnboardingsQueryParams) =>
      cursorPaginateAll<Onboarding>(
        request,
        'onboardings',
        queryParams ?? {}
      ),
  };
}
