import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  AvailableSlotResponse,
  ListAvailableSlotsQueryParams,
} from '../../types/v2024/available_slots.js';

export function V2024AvailableSlotsResource(request: RequestFunction) {
  return {
    list: (queryParams: ListAvailableSlotsQueryParams) =>
      request<NexHealthResponse<AvailableSlotResponse[]>>(
        'available_slots',
        'GET',
        queryParams
      ),
  };
}
