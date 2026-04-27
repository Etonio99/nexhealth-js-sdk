import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Appointment,
  GetAppointmentQueryParams,
  ListAppointmentQueryParams,
} from '../../types/v2/appointments.js';

export function V2AppointmentsResource(request: RequestFunction) {
  return {
    get: (appointmentId: number, queryParams: GetAppointmentQueryParams) =>
      request<NexHealthApiResponse<Appointment>>(
        `appointments/${appointmentId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListAppointmentQueryParams) =>
      request<NexHealthApiResponse<Appointment[]>>(
        'appointments',
        'GET',
        queryParams
      ),
  };
}
