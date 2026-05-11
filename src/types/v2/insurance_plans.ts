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
  patient_coverages?: InsurancePlanCoverage[];
  subscribers?: InsuranceSubscriber[];
};

export type InsurancePlanCoverage = {
  id: number;
  subscription_relation: string;
  patient_id: number;
  priority: number;
  plan_id: number;
  subscriber_num: string | null;
  effective_date: string | null;
  expiration_date: string | null;
};

export type InsuranceCoverage = InsurancePlanCoverage & {
  plan: InsurancePlan;
  subscriber: InsuranceSubscriber;
};

export type InsuranceSubscriber = {
  id: number;
  name: string;
  date_of_birth: string | null;
};

// PARAMS

export type ListInsurancePlansQueryParams = {
  subdomain: string;
  location_id: number;
  name?: string;
  foreign_id?: string;
  include?: InsurancePlanInclude[];
  page?: number;
  per_page?: number;
};

export type InsurancePlanInclude = 'patient_coverages' | 'subscribers';

export type GetInsurancePlanQueryParams = {
  subdomain: string;
  include?: InsurancePlanInclude[];
};
