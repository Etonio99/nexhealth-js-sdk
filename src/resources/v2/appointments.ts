import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Appointment,
  CreateAppointmentBodyParams,
  CreateAppointmentQueryParams,
  UpdateAppointmentBodyParams,
  UpdateAppointmentQueryParams,
  GetAppointmentQueryParams,
  ListAllAppointmentsQueryParams,
  ListAppointmentDescriptorsQueryParams,
  ListAppointmentsQueryParams,
} from '../../types/v2/appointments.js';
import { paginateAll } from '../pagination.js';

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
    update: (
      appointmentId: number,
      queryParams: UpdateAppointmentQueryParams,
      bodyParams: UpdateAppointmentBodyParams
    ) =>
      request<
        NexHealthApiResponse<{
          appt: Appointment;
          stripe_client_secret?: string | null;
        }>
      >(`appointments/${appointmentId}`, 'PATCH', queryParams, bodyParams),
    get: (appointmentId: number, queryParams: GetAppointmentQueryParams) =>
      request<NexHealthApiResponse<Appointment>>(
        `appointments/${appointmentId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListAppointmentsQueryParams) =>
      request<NexHealthApiResponse<Appointment[]>>(
        'appointments',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllAppointmentsQueryParams) =>
      paginateAll(
        request,
        'appointments',
        queryParams,
        (data: Appointment[]) => data,
        (appointments) => appointments
      ),
    descriptors: {
      list: (
        appointmentId: number,
        queryParams: ListAppointmentDescriptorsQueryParams
      ) =>
        request<NexHealthApiResponse<Appointment[]>>(
          `appointments/${appointmentId}/appointment_descriptors`,
          'GET',
          queryParams
        ),
    },
  };
}
