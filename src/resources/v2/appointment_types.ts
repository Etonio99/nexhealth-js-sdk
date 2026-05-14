import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  AppointmentType,
  CreateAppointmentTypeBodyParams,
  DeleteAppointmentTypeQueryParams,
  UpdateAppointmentTypeBodyParams,
  GetAppointmentTypeQueryParams,
  ListAppointmentTypeDescriptorsQueryParams,
  ListAppointmentTypesQueryParams,
} from '../../types/v2/appointment_types.js';
import type { AppointmentDescriptor } from '../../types/v2/appointments.js';

export function V2AppointmentTypesResource(request: RequestFunction) {
  return {
    create: (bodyParams?: CreateAppointmentTypeBodyParams) =>
      request<NexHealthApiResponse<AppointmentType>>(
        'appointment_types',
        'POST',
        undefined,
        bodyParams
      ),
    delete: (
      appointmentTypeId: number,
      queryParams?: DeleteAppointmentTypeQueryParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        `appointment_types/${appointmentTypeId}`,
        'DELETE',
        queryParams
      ),
    update: (
      appointmentTypeId: number,
      bodyParams?: UpdateAppointmentTypeBodyParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        `appointment_types/${appointmentTypeId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
    get: (
      appointmentTypeId: number,
      queryParams?: GetAppointmentTypeQueryParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        `appointment_types/${appointmentTypeId}`,
        'GET',
        queryParams
      ),
    list: (queryParams?: ListAppointmentTypesQueryParams) =>
      request<NexHealthApiResponse<AppointmentType[]>>(
        'appointment_types',
        'GET',
        queryParams
      ),
    descriptors: {
      list: (
        appointmentTypeId: number,
        queryParams?: ListAppointmentTypeDescriptorsQueryParams
      ) =>
        request<NexHealthApiResponse<AppointmentDescriptor[]>>(
          `appointment_types/${appointmentTypeId}/appointment_descriptors`,
          'GET',
          queryParams
        ),
    },
  };
}
