import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  AppointmentSlots,
  ListAppointmentSlotsQueryParams,
} from '../../types/v2/appointment_slots.js';

export function V2AppointmentSlotsResource(request: RequestFunction) {
  return {
    list: (queryParams: ListAppointmentSlotsQueryParams) =>
      request<NexHealthApiResponse<AppointmentSlots[]>>(
        'appointment_slots',
        'GET',
        queryParams
      ),
  };
}
