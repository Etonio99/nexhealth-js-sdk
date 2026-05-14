import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type { AppointmentDescriptor } from '../../types/v2/appointments.js';
import type {
  ListLocationAppointmentDescriptors,
  ListLocationsQueryParams,
  NexLocation,
} from '../../types/v2/locations.js';

export function V2LocationsResource(request: RequestFunction) {
  return {
    get: (locationId: number) =>
      request<NexHealthApiResponse<NexLocation>>(`locations/${locationId}`),
    list: (queryParams?: ListLocationsQueryParams) =>
      request<NexHealthApiResponse<NexLocation[]>>(
        'locations',
        'GET',
        queryParams
      ),
    descriptors: {
      list: (
        locationId: number,
        queryParams?: ListLocationAppointmentDescriptors
      ) =>
        request<NexHealthApiResponse<AppointmentDescriptor[]>>(
          `locations/${locationId}/appointment_descriptors`,
          'GET',
          queryParams
        ),
    },
  };
}
