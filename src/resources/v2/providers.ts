import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetProviderQueryParams,
  ListAllProvidersQueryParams,
  ListProvidersQueryParams,
  Provider,
} from '../../types/v2/providers.js';
import { paginateAll } from '../pagination.js';

export function V2ProvidersResource(request: RequestFunction) {
  return {
    get: (providerId: number, queryParams?: GetProviderQueryParams) =>
      request<NexHealthResponse<Provider>>(
        `providers/${providerId}`,
        'GET',
        queryParams
      ),
    list: (queryParams?: ListProvidersQueryParams) =>
      request<NexHealthResponse<Provider[]>>(
        'providers',
        'GET',
        queryParams
      ),
    listAll: (queryParams?: ListAllProvidersQueryParams) =>
      paginateAll(
        request,
        'providers',
        queryParams ?? {},
        (data: Provider[]) => data,
        (providers) => providers
      ),
  };
}
