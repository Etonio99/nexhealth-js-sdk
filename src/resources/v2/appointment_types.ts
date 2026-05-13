import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  AppointmentType,
  CreateAppointmentTypeBodyParams,
  CreateAppointmentTypeQueryParams,
  DeleteAppointmentTypeQueryParams,
  UpdateAppointmentTypeBodyParams,
  UpdateAppointmentTypeQueryParams,
  GetAppointmentTypeQueryParams,
  ListAppointmentTypeDescriptorsQueryParams,
  ListAppointmentTypesQueryParams,
} from '../../types/v2/appointment_types.js';

export function V2AppointmentTypesResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateAppointmentTypeQueryParams,
      bodyParams: CreateAppointmentTypeBodyParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        'appointment_types',
        'POST',
        queryParams,
        bodyParams
      ),
    delete: (
      appointmentTypeId: number,
      queryParams: DeleteAppointmentTypeQueryParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        `appointment_types/${appointmentTypeId}`,
        'DELETE',
        queryParams
      ),
    update: (
      appointmentTypeId: number,
      queryParams: UpdateAppointmentTypeQueryParams,
      bodyParams: UpdateAppointmentTypeBodyParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        `appointment_types/${appointmentTypeId}`,
        'PATCH',
        queryParams,
        bodyParams
      ),
    get: (
      appointmentTypeId: number,
      queryParams: GetAppointmentTypeQueryParams
    ) =>
      request<NexHealthApiResponse<AppointmentType>>(
        `appointment_types/${appointmentTypeId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListAppointmentTypesQueryParams) =>
      request<NexHealthApiResponse<AppointmentType[]>>(
        'appointment_types',
        'GET',
        queryParams
      ),
    descriptors: {
      list: (
        appointmentTypeId: number,
        queryParams: ListAppointmentTypeDescriptorsQueryParams
      ) =>
        request<NexHealthApiResponse<AppointmentType>>(
          `appointment_types/${appointmentTypeId}/appointment_descriptors`,
          'GET',
          queryParams
        ),
    },
  };
}
