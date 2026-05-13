import type { Adjustment } from './adjustments.js';
import type { Appointment } from './appointments.js';
import type { Charge } from './charges.js';
import type { PaginationParams } from './common.js';
import type { InsuranceCoverage } from './insurance_plans.js';
import type { PatientAlert } from './patient_alert.js';
import type { Payment } from './payments.js';
import type { Procedure } from './procedures.js';
import type { Provider } from './providers.js';

export type Patient = {
  id: number;
  email: string | null;
  first_name: string | null;
  middle_name: string | null;
  last_name: string | null;
  name: string;
  created_at: string;
  updated_at: string;
  institution_id: number;
  foreign_id: string | null;
  foreign_id_type: string | null;
  bio: Bio;
  inactive: boolean;
  last_sync_time: string | null;
  guarantor_id: number | null;
  unsubscribe_sms: boolean;
  balance: {
    amount: string;
    currency: string;
  };
  billing_type: string | null;
  chart_id: string | null;
  preferred_language: string | null;
  preferred_locale: string | null;
  location_ids: number[];
  children?: Patient[];
  guarantor?: Patient | null;
  last_visited_appointment?: Appointment | null;
  upcoming_appts?: Appointment[];
  procedures?: Procedure[];
  insurance_coverages?: InsuranceCoverage[];
  adjustments?: Adjustment[];
  charges?: Charge[];
  payments?: Payment[];
  patient_alerts?: PatientAlert[];
  address?: {
    line_1: string | null;
    line_2: string | null;
    postal_code: string | null;
    city: string | null;
    region: string | null;
  };
  provider?: Provider | null;
};

export type Bio = {
  city?: string;
  state?: string;
  gender?: string;
  zip_code?: string | null;
  new_patient?: boolean;
  non_patient?: boolean;
  phone_number?: string;
  date_of_birth?: string | null;
  address_line_1?: string;
  address_line_2?: string;
  street_address?: string;
  expired_numbers?: string[];
  verified_mobile?: string | null;
  cell_phone_number?: string;
  home_phone_number?: string;
  patient_requested?: boolean;
  work_phone_number?: string;
  previous_foreign_id?: string | null;
  custom_contact_number?: string | null;
};

// PARAMS

export type GetPatientQueryParams = {
  subdomain: string;
  include?: GetPatientInclude[];
};

type BasePatientInclude =
  | 'upcoming_appts'
  | 'procedures'
  | 'insurance_coverages'
  | 'adjustments'
  | 'charges'
  | 'payments'
  | 'address';
export type GetPatientInclude =
  | BasePatientInclude
  | 'last_visited_appointment'
  | 'children'
  | 'guarantor'
  | 'provider'
  | 'patient_alerts';
export type ListPatientInclude = BasePatientInclude;

type BaseListPatientQueryParams = {
  subdomain: string;
  location_id: number;
  name?: string;
  email?: string;
  phone_number?: string;
  date_of_birth?: string;
  inactive?: boolean;
  foreign_id?: string;
  updated_since?: string;
  new_patient?: boolean;
  non_patient?: boolean;
  forms_syncable?: boolean;
  location_strict?: boolean;
  include?: ListPatientInclude[];
  sort?: 'name' | '-name' | 'created_at' | '-created_at';
  appointment_date_start?: string;
  appointment_date_end?: string;
};

export type ListPatientsQueryParams = BaseListPatientQueryParams &
  PaginationParams;

export type ListAllPatientsQueryParams = BaseListPatientQueryParams;

export type CreatePatientQueryParams = {
  subdomain: string;
  location_id: number;
};

export type CreatePatientBodyParams = {
  provider: {
    provider_id: number;
  };
  patient: {
    first_name: string;
    last_name: string;
    email: string;
    bio: BioBodyParams;
  };
};

export type BioBodyParams = {
  date_of_birth: string;
  phone_number: string;
  home_phone_number?: string;
  cell_phone_number?: string;
  work_phone_number?: string;
  custom_contact_number?: string;
  gender?: 'Male' | 'Female' | 'Other';
  weight?: number;
  height?: number;
  street_address?: string;
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  insurance_name?: string;
  ssn?: string;
  race?: string;
};

export type GetPatientInsuranceCoveragesQueryParams = {
  subdomain: string;
} & PaginationParams;
