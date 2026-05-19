import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreatePaymentBodyParams,
  CreatePaymentQueryParams,
  GetPaymentQueryParams,
  ListAllPaymentsQueryParams,
  ListPaymentsQueryParams,
  Payment,
} from '../../types/v2024/payments.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024PaymentsResource(request: RequestFunction) {
  return {
    create: (
      queryParams: CreatePaymentQueryParams,
      bodyParams: CreatePaymentBodyParams
    ) =>
      request<NexHealthResponse<Payment>>(
        'payments',
        'POST',
        queryParams,
        bodyParams
      ),
    get: (paymentId: number, queryParams?: GetPaymentQueryParams) =>
      request<NexHealthResponse<Payment>>(
        `payments/${paymentId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListPaymentsQueryParams) =>
      request<NexHealthResponse<Payment[]>>('payments', 'GET', queryParams),
    listAll: (queryParams: ListAllPaymentsQueryParams) =>
      cursorPaginateAll<Payment>(request, 'payments', queryParams),
  };
}
