import type { CursorPaginationParams } from './common.js';

export type PaymentType = {
  id: number;
  name: string;
  active: boolean;
  updated_at: string;
};

// PARAMS

type BaseListPaymentTypesQueryParams = {
  location_id: number;
  updated_since?: string;
  active?: boolean;
};

export type ListPaymentTypesQueryParams = BaseListPaymentTypesQueryParams &
  CursorPaginationParams;

export type ListAllPaymentTypesQueryParams = BaseListPaymentTypesQueryParams;
