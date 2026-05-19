import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Appointment,
  AppointmentDescriptor,
  CreateAppointmentBodyParams,
  CreateAppointmentQueryParams,
  GetAppointmentQueryParams,
  ListAllAppointmentsQueryParams,
  ListAppointmentsQueryParams,
  UpdateAppointmentBodyParams,
} from '../../types/v2024/appointments.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024AppointmentsResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateAppointmentQueryParams,
      bodyParams: CreateAppointmentBodyParams
    ) =>
      request<NexHealthResponse<{ appt: Appointment }>>(
        'appointments',
        'POST',
        queryParams,
        bodyParams
      ),
    update: (appointmentId: number, bodyParams?: UpdateAppointmentBodyParams) =>
      request<NexHealthResponse<{ appt: Appointment }>>(
        `appointments/${appointmentId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
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
      cursorPaginateAll<Appointment>(request, 'appointments', queryParams),
    descriptors: {
      list: (appointmentId: number) =>
        request<NexHealthResponse<AppointmentDescriptor[]>>(
          `appointments/${appointmentId}/appointment_descriptors`,
          'GET'
        ),
    },
  };
}
