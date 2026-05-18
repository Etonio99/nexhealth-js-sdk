import type { CursorPaginationParams, Price } from './common.js';
import type { FeeScheduleProcedure } from './fee_schedule_procedures.js';
import type { Patient } from './patients.js';
import type { Provider } from './providers.js';

export type InsuranceClaim = {
  id: number;
  location_id: number;
  patient_id: number;
  provider_id: number;
  guarantor_id: number | null;
  status: 'draft' | 'sent' | 'received' | 'canceled';
  received_at: string | null;
  sent_at: string | null;
  note: string | null;
  primary_insurance_plan_id: number | null;
  secondary_insurance_plan_id: number | null;
  date_of_service: string | null;
  totals: ClaimTotals;
  updated_at: string;
  deleted_at: string | null;
  patient?: Patient;
  provider?: Provider;
  guarantor?: Patient;
  charge_payouts?: ChargePayout[];
  charges?: ClaimCharge[];
};

export type ClaimTotals = {
  amount_billed_to_insurance: Price;
  estimated_insurance_payment: Price;
  insurance_payment: Price;
  write_off: Price;
};

export type ChargePayout = {
  amount_billed_to_insurance: Price;
  estimated_insurance_payment: Price;
  insurance_payment: Price;
  write_off: Price;
  allowed_amount: Price;
  fee_schedule_procedure_code: FeeScheduleProcedure | null;
  charge_id: number;
};

export type ClaimCharge = {
  id: number;
  foreign_id: string;
  location_id: number;
  patient_id: number;
  guarantor_id: number | null;
  provider_id: number | null;
  procedure_id: number | null;
  procedure_code: string | null;
  updated_at: string | null;
  description: string | null;
  fee: Price;
  charged_at: string | null;
};

// PARAMS

export type GetInsuranceClaimQueryParams = {
  include?: GetInsuranceClaimInclude[];
};

type BaseListInsuranceClaimsQueryParams = {
  location_id: number;
  patient_id?: number;
  provider_id?: number;
  guarantor_id?: number;
  updated_since?: string;
  date_of_service?: string;
  include_deleted?: boolean;
  sort?: 'updated_at' | '-updated_at';
};

export type ListInsuranceClaimsQueryParams = BaseListInsuranceClaimsQueryParams &
  CursorPaginationParams;

export type ListAllInsuranceClaimsQueryParams = BaseListInsuranceClaimsQueryParams;

export type GetInsuranceClaimInclude =
  | 'patient'
  | 'provider'
  | 'guarantor'
  | 'charges'
  | 'charge_payouts';
