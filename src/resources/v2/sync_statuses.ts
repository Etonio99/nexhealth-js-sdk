import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListSyncStatusesQueryParams,
  SyncStatus,
} from '../../types/v2/sync_statuses.js';

export function V2SyncStatusesResource(request: RequestFunction) {
  return {
    list: (queryParams?: ListSyncStatusesQueryParams) =>
      request<NexHealthResponse<SyncStatus[]>>(
        'sync_status',
        'GET',
        queryParams
      ),
  };
}
