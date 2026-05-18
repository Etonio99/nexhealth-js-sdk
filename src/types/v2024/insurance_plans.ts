import type { CursorPaginationParams } from './common.js';
import type { FeeSchedule } from './fee_schedules.js';
import type { InsuranceCoverage, InsuranceSubscriber } from './insurance_coverages.js';

export type InsurancePlan = {
  id: number;
  payer_id: string | null;
  name: string;
  address: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  country_code: string | null;
  group_num: string;
  employer_name: string | null;
  foreign_id: string;
  updated_at: string;
  deleted_at: string | null;
  patient_coverages?: InsuranceCoverage[];
  subscribers?: InsuranceSubscriber[];
  fee_schedule?: FeeSchedule;
};

// PARAMS

export type GetInsurancePlanQueryParams = {
  include?: InsurancePlanInclude[];
};

type BaseListInsurancePlansQueryParams = {
  payer_id?: string;
  group_num?: string;
  updated_since?: string;
  include_deleted?: boolean;
  sort?: 'updated_at' | '-updated_at';
};

export type ListInsurancePlansQueryParams = BaseListInsurancePlansQueryParams &
  CursorPaginationParams;

export type ListAllInsurancePlansQueryParams = BaseListInsurancePlansQueryParams;

export type InsurancePlanInclude = 'patient_coverages' | 'subscribers' | 'fee_schedule';
