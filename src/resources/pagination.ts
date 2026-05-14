import { V2Constants } from './v2/constants.js';
import type { NexHealthResponse } from '../types/base.js';
import type { RequestFunction } from '../types/common.js';

export async function paginateAll<T, R>(
  request: RequestFunction,
  endpoint: string,
  queryParams: Record<string, unknown>,
  extractItems: (data: R) => T[],
  buildData: (items: T[]) => R
): Promise<NexHealthResponse<R>> {
  let hasNextPage = true;
  const items: T[] = [];
  let count = 0;
  let setCount = false;
  let currentPage = 0;

  while (hasNextPage) {
    currentPage++;

    const response = await request<NexHealthResponse<R>>(endpoint, 'GET', {
      per_page: V2Constants.MAX_PER_PAGE,
      page: currentPage,
      ...queryParams,
    });

    if (response.count != null && !setCount) {
      count = response.count;
      setCount = true;
    }

    if (response.data != null) {
      items.push(...extractItems(response.data));
    }

    hasNextPage = currentPage * V2Constants.MAX_PER_PAGE < count;
  }

  return { data: buildData(items), count };
}
