import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Appointment,
  CreateAppointmentBodyParams,
  CreateAppointmentQueryParams,
  GetAppointmentQueryParams,
  ListAppointmentQueryParams,
} from '../../types/v2/appointments.js';

export function V2AppointmentsResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateAppointmentQueryParams,
      bodyParams: CreateAppointmentBodyParams
    ) =>
      request<
        NexHealthApiResponse<{
          appt: Appointment;
          stripe_client_secret?: string | null;
        }>
      >('appointments', 'POST', queryParams, bodyParams),
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
