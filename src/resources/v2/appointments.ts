import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Appointment,
  CreateAppointmentBodyParams,
  CreateAppointmentQueryParams,
  UpdateAppointmentBodyParams,
  GetAppointmentQueryParams,
  ListAllAppointmentsQueryParams,
  ListAppointmentDescriptorsQueryParams,
  ListAppointmentsQueryParams,
  AppointmentDescriptor,
} from '../../types/v2/appointments.js';
import { paginateAll } from '../pagination.js';

export function V2AppointmentsResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateAppointmentQueryParams,
      bodyParams: CreateAppointmentBodyParams
    ) =>
      request<
        NexHealthResponse<{
          appt: Appointment;
          stripe_client_secret?: string | null;
        }>
      >('appointments', 'POST', queryParams, bodyParams),
    update: (appointmentId: number, bodyParams?: UpdateAppointmentBodyParams) =>
      request<
        NexHealthResponse<{
          appt: Appointment;
          stripe_client_secret?: string | null;
        }>
      >(`appointments/${appointmentId}`, 'PATCH', undefined, bodyParams),
    get: (appointmentId: number, queryParams?: GetAppointmentQueryParams) =>
      request<NexHealthResponse<Appointment>>(
        `appointments/${appointmentId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListAppointmentsQueryParams) =>
      request<NexHealthResponse<Appointment[]>>(
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
        queryParams?: ListAppointmentDescriptorsQueryParams
      ) =>
        request<NexHealthResponse<AppointmentDescriptor[]>>(
          `appointments/${appointmentId}/appointment_descriptors`,
          'GET',
          queryParams
        ),
    },
  };
}
