import type { CursorPaginationParams, Price } from './common.js';

export type InsuranceBalance = {
  id: number;
  patient_id: number;
  guarantor_id: number;
  location_id: number;
  updated_at: string;
  estimated_amount_under_30: Price;
  estimated_amount_31_60: Price;
  estimated_amount_61_90: Price;
  estimated_amount_over_90: Price;
  billed_amount_under_30: Price;
  billed_amount_31_60: Price;
  billed_amount_61_90: Price;
  billed_amount_over_90: Price;
};

// PARAMS

type BaseListInsuranceBalancesQueryParams = {
  location_id: number;
  patient_id?: number;
  guarantor_id?: number;
  updated_since?: string;
  sort?: 'updated_at' | '-updated_at';
};

export type ListInsuranceBalancesQueryParams = BaseListInsuranceBalancesQueryParams &
  CursorPaginationParams;

export type ListAllInsuranceBalancesQueryParams = BaseListInsuranceBalancesQueryParams;
