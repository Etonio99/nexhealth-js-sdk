import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import { V2024Constants } from './constants.js';

export async function cursorPaginateAll<T>(
  request: RequestFunction,
  endpoint: string,
  queryParams: Record<string, unknown>
): Promise<NexHealthResponse<T[]>> {
  let hasNextPage = true;
  const items: T[] = [];
  let endCursor: string | undefined;
  let count = 0;

  while (hasNextPage) {
    const requestParams: Record<string, unknown> = {
      per_page: V2024Constants.MAX_PER_PAGE,
      ...queryParams,
    };
    if (endCursor) {
      requestParams['end_cursor'] = endCursor;
    }

    const response = await request<NexHealthResponse<T[]>>(
      endpoint,
      'GET',
      requestParams
    );

    if (response.data != null) {
      items.push(...response.data);
      count += response.data.length;
    }
    if (response.page_info) {
      hasNextPage = response.page_info.has_next_page;
      endCursor = response.page_info.end_cursor;
    } else {
      hasNextPage = false;
    }
  }

  return { data: items, count };
}
