import type { AdjustmentType } from './adjustment_types.js';
import type { CursorPaginationParams, Price } from './common.js';
import type { Patient } from './patients.js';
import type { Provider } from './providers.js';

export type Adjustment = {
  id: number;
  foreign_id: string;
  location_id: number;
  patient_id: number;
  guarantor_id: number | null;
  provider_id: number | null;
  updated_at: string;
  description: string | null;
  deleted_at: string | null;
  adjustment_amount: Price;
  adjusted_at: string;
  transaction_id: string | null;
  charge_id: number | null;
  claim_id: number | null;
  adjustment_type_id: number | null;
  value: Price;
  patient?: Patient;
  provider?: Provider;
  guarantor?: Patient;
  claim?: AdjustmentClaim;
  charge?: AdjustmentCharge;
  adjustment_type?: AdjustmentType;
};

export type AdjustmentClaim = {
  id: number;
  status: string;
};

export type AdjustmentCharge = {
  id: number;
  description: string | null;
  fee: Price;
};

// PARAMS

export type CreateAdjustmentQueryParams = {
  location_id: number;
};

export type CreateAdjustmentBodyParams = {
  adjustment: {
    patient_id: number;
    guarantor_id?: number;
    provider_id?: number;
    charge_id?: number;
    claim_id?: number;
    adjustment_type_id?: number;
    description?: string;
    adjusted_at?: string;
    amount: number;
    currency?: string;
  };
};

export type GetAdjustmentQueryParams = {
  include?: GetAdjustmentInclude[];
};

type BaseListAdjustmentsQueryParams = {
  location_id: number;
  patient_id?: number;
  provider_id?: number;
  guarantor_id?: number;
  claim_id?: number;
  charge_id?: number;
  updated_since?: string;
  include_deleted?: boolean;
  sort?: 'updated_at' | '-updated_at';
};

export type ListAdjustmentsQueryParams = BaseListAdjustmentsQueryParams & CursorPaginationParams;

export type ListAllAdjustmentsQueryParams = BaseListAdjustmentsQueryParams;

export type GetAdjustmentInclude =
  | 'patient'
  | 'provider'
  | 'guarantor'
  | 'claim'
  | 'charge'
  | 'adjustment_type';
