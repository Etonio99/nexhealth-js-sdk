import type { CursorPaginationParams, Price } from './common.js';
import type { Patient } from './patients.js';

export type GuarantorBalance = {
  id: number;
  foreign_id: string;
  guarantor_id: number;
  location_id: number;
  updated_at: string;
  write_off_estimate: Price;
  total_balance: Price;
  insurance_estimate: Price;
  guarantor_portion: Price;
  total_balance_under_30: Price;
  total_balance_31_60: Price;
  total_balance_61_90: Price;
  total_balance_over_90: Price;
  guarantor?: Patient;
};

// PARAMS

export type GetGuarantorBalanceQueryParams = {
  include?: GuarantorBalanceInclude[];
};

type BaseListGuarantorBalancesQueryParams = {
  location_id: number;
  guarantor_id?: number;
  updated_since?: string;
  show_zero_balances?: boolean;
  sort?: 'updated_at' | '-updated_at';
};

export type ListGuarantorBalancesQueryParams =
  BaseListGuarantorBalancesQueryParams & CursorPaginationParams;

export type ListAllGuarantorBalancesQueryParams =
  BaseListGuarantorBalancesQueryParams;

export type GuarantorBalanceInclude = 'guarantor';
