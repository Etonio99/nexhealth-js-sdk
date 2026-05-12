import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  Availability,
  CreateAvailabilityBodyParams,
  CreateAvailabilityQueryParams,
  DeleteAvailabilityQueryParams,
  EditAvailabilityBodyParams,
  EditAvailabilityQueryParams,
  GetAvailabilityQueryParams,
  ListAllAvailabilitiesQueryParams,
  ListAvailabilitiesQueryParams,
} from '../../types/v2/availabilities.js';
import { paginateAll } from '../pagination.js';

export function V2AvailabilitiesResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreateAvailabilityQueryParams,
      bodyParams: CreateAvailabilityBodyParams
    ) =>
      request<NexHealthApiResponse<Availability>>(
        'availabilities',
        'POST',
        queryParams,
        bodyParams
      ),
    delete: (
      availabilityId: number,
      queryParams: DeleteAvailabilityQueryParams
    ) =>
      request<null>(`availabilities/${availabilityId}`, 'DELETE', queryParams),
    edit: (
      availabilityId: number,
      queryParams: EditAvailabilityQueryParams,
      bodyParams: EditAvailabilityBodyParams
    ) =>
      request<NexHealthApiResponse<Availability>>(
        `availabilities/${availabilityId}`,
        'PATCH',
        queryParams,
        bodyParams
      ),
    get: (availabilityId: number, queryParams: GetAvailabilityQueryParams) =>
      request<NexHealthApiResponse<Availability>>(
        `availabilities/${availabilityId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListAvailabilitiesQueryParams) =>
      request<NexHealthApiResponse<Availability[]>>(
        'availabilities',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllAvailabilitiesQueryParams) =>
      paginateAll(
        request,
        'availabilities',
        queryParams,
        (data: Availability[]) => data,
        (availabilities) => availabilities
      ),
  };
}
