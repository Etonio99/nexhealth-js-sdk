import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  GetProviderQueryParams,
  ListAllProvidersQueryParams,
  ListProvidersQueryParams,
  Provider,
} from '../../types/v2024/providers.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024ProvidersResource(request: RequestFunction) {
  return {
    get: (providerId: number, queryParams?: GetProviderQueryParams) =>
      request<NexHealthResponse<Provider>>(
        `providers/${providerId}`,
        'GET',
        queryParams
      ),
    list: (queryParams?: ListProvidersQueryParams) =>
      request<NexHealthResponse<Provider[]>>('providers', 'GET', queryParams),
    listAll: (queryParams?: ListAllProvidersQueryParams) =>
      cursorPaginateAll<Provider>(request, 'providers', queryParams ?? {}),
  };
}
