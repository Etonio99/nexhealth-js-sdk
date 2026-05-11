import { NexHealthAPIError } from '../error.js';
import { V2Constants } from './v2/constants.js';
import type { NexHealthApiResponse } from '../types/base.js';
import type { RequestFunction } from '../types/common.js';

export async function paginateAll<T, R>(
  request: RequestFunction,
  endpoint: string,
  queryParams: Record<string, unknown>,
  extractItems: (data: R) => T[],
  buildData: (items: T[]) => R
): Promise<NexHealthApiResponse<R>> {
  let hasNextPage = true;
  const items: T[] = [];
  let count = 0;
  let setCount = false;
  let currentPage = 0;

  while (hasNextPage) {
    currentPage++;

    const response = await request<NexHealthApiResponse<R>>(endpoint, 'GET', {
      per_page: V2Constants.MAX_PER_PAGE,
      page: currentPage,
      ...queryParams,
    });

    if (!response.code) throw new NexHealthAPIError();

    if (response.count && !setCount) {
      count = response.count;
      setCount = true;
    }

    if (response.data) {
      items.push(...extractItems(response.data));
    }

    hasNextPage = currentPage * V2Constants.MAX_PER_PAGE < count;
  }

  return { code: true, data: buildData(items), count };
}
