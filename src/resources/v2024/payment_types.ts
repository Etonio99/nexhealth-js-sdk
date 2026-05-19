import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ListAllPaymentTypesQueryParams,
  ListPaymentTypesQueryParams,
  PaymentType,
} from '../../types/v2024/payment_types.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024PaymentTypesResource(request: RequestFunction) {
  return {
    get: (paymentTypeId: number) =>
      request<NexHealthResponse<PaymentType>>(
        `payment_types/${paymentTypeId}`,
        'GET'
      ),
    list: (queryParams: ListPaymentTypesQueryParams) =>
      request<NexHealthResponse<PaymentType[]>>(
        'payment_types',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllPaymentTypesQueryParams) =>
      cursorPaginateAll<PaymentType>(request, 'payment_types', queryParams),
  };
}
