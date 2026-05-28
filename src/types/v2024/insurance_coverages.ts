import type { CursorPaginationParams } from './common.js';

export type InsuranceCoverage = {
  id: number;
  subscription_relation: string;
  patient_id: number;
  priority: number;
  plan_id: number;
  subscriber_num: string | null;
  effective_date: string | null;
  expiration_date: string | null;
  insurance_type: string;
  updated_at: string;
  active: boolean;
  subscriber?: InsuranceSubscriber;
};

export type InsuranceSubscriber = {
  id: number;
  name: string;
  date_of_birth: string | null;
};

// PARAMS

export type GetInsuranceCoverageQueryParams = Record<string, never>;

type BaseListInsuranceCoveragesQueryParams = {
  patient_id?: number;
  updated_since?: string;
  active?: boolean;
};

export type ListInsuranceCoveragesQueryParams =
  BaseListInsuranceCoveragesQueryParams & CursorPaginationParams;

export type ListAllInsuranceCoveragesQueryParams =
  BaseListInsuranceCoveragesQueryParams;
