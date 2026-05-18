import type { CursorPaginationParams, Price } from './common.js';
import type { Patient } from './patients.js';
import type { PaymentType } from './payment_types.js';
import type { Provider } from './providers.js';

export type Payment = {
  id: number;
  foreign_id: string;
  location_id: number;
  patient_id: number;
  guarantor_id: number | null;
  provider_id: number | null;
  updated_at: string | null;
  description: string | null;
  deleted_at: string | null;
  payment_amount: Price | null;
  paid_at: string | null;
  transaction_id: string | null;
  charge_id: number | null;
  claim_id: number | null;
  payment_plan_id: number | null;
  insurance_plan_id: number | null;
  payment_type_id: number | null;
  value: Price;
  patient?: Patient;
  provider?: Provider;
  guarantor?: Patient;
  claim?: PaymentClaim;
  charge?: PaymentCharge;
  payment_plan?: PaymentPlan;
  payment_type?: PaymentType;
};

export type PaymentClaim = {
  id: number;
  status: string;
};

export type PaymentCharge = {
  id: number;
  description: string | null;
  fee: Price;
};

export type PaymentPlan = {
  id: number;
  active: boolean;
};

// PARAMS

export type CreatePaymentQueryParams = {
  location_id: number;
};

export type CreatePaymentBodyParams = {
  payment: {
    patient_id: number;
    guarantor_id?: number;
    provider_id?: number;
    charge_id?: number;
    claim_id?: number;
    payment_type_id?: number;
    payment_plan_id?: number;
    insurance_plan_id?: number;
    description?: string;
    paid_at?: string;
    amount: number;
    currency?: string;
  };
};

export type GetPaymentQueryParams = {
  include?: GetPaymentInclude[];
};

type BaseListPaymentsQueryParams = {
  location_id: number;
  patient_id?: number;
  provider_id?: number;
  guarantor_id?: number;
  charge_id?: number;
  claim_id?: number;
  transaction_id?: string;
  updated_since?: string;
  include_deleted?: boolean;
  sort?: 'updated_at' | '-updated_at';
};

export type ListPaymentsQueryParams = BaseListPaymentsQueryParams & CursorPaginationParams;

export type ListAllPaymentsQueryParams = BaseListPaymentsQueryParams;

export type GetPaymentInclude =
  | 'patient'
  | 'provider'
  | 'guarantor'
  | 'claim'
  | 'charge'
  | 'payment_plan'
  | 'payment_type';
