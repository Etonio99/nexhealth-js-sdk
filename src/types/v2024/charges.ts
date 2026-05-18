import type { CursorPaginationParams, Price } from './common.js';
import type { FeeScheduleProcedure } from './fee_schedule_procedures.js';
import type { Patient } from './patients.js';
import type { Procedure } from './procedures.js';
import type { Provider } from './providers.js';

export type Charge = {
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
  deleted_at: string | null;
  patient?: Patient;
  provider?: Provider;
  guarantor?: Patient;
  procedure?: Procedure;
  claim_payouts?: ClaimPayout[];
  claims?: ChargeInsuranceClaim[];
  totals?: ChargeTotals;
};

export type ClaimPayout = {
  amount_billed_to_insurance: Price;
  estimated_insurance_payment: Price;
  insurance_payment: Price;
  write_off: Price;
  allowed_amount: Price;
  fee_schedule_procedure_code: FeeScheduleProcedure | null;
  claim_id: number;
};

export type ChargeTotals = {
  amount_billed_to_insurance: Price;
  estimated_insurance_payment: Price;
  insurance_payment: Price;
  write_off: Price;
};

export type ChargeInsuranceClaim = {
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
  totals: ChargeTotals;
  updated_at: string;
};

// PARAMS

export type GetChargeQueryParams = {
  include?: GetChargeInclude[];
};

type BaseListChargesQueryParams = {
  location_id: number;
  patient_id?: number;
  provider_id?: number;
  procedure_id?: number;
  guarantor_id?: number;
  updated_since?: string;
  include_deleted?: boolean;
  sort?: 'updated_at' | '-updated_at';
  include?: ListChargeInclude[];
};

export type ListChargesQueryParams = BaseListChargesQueryParams & CursorPaginationParams;

export type ListAllChargesQueryParams = BaseListChargesQueryParams;

export type ListChargeInclude = 'claim_payouts';

export type GetChargeInclude =
  | 'patient'
  | 'provider'
  | 'procedure'
  | 'guarantor'
  | 'claims'
  | 'claim_payouts'
  | 'totals';
