import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListProviderSearchQueryParams,
  ProviderSearchResult,
} from '../../types/v2024/provider_search.js';

export function V2024ProviderSearchResource(request: RequestFunction) {
  return {
    list: (queryParams?: ListProviderSearchQueryParams) =>
      request<NexHealthResponse<ProviderSearchResult[]>>(
        'provider_search',
        'GET',
        queryParams
      ),
  };
}
