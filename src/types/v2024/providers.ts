import type { AppointmentType } from './appointment_types.js';
import type { CursorPaginationParams } from './common.js';
import type { WorkingHour } from './working_hours.js';

export type Provider = {
  id: number;
  email: string | null;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  name: string;
  created_at: string;
  updated_at: string;
  institution_id: number;
  foreign_id: string | null;
  foreign_id_type: string | null;
  bio: ProviderBio;
  inactive: boolean;
  last_sync_time: string | null;
  display_name: string | null;
  npi: string | null;
  tin: string | null;
  state_license: string | null;
  specialty_code: string | null;
  nexhealth_specialty: string | null;
  profile_url: string | null;
  provider_requestables: ProviderRequestable[];
  locations?: ProviderLocation[];
  availabilities?: WorkingHour[];
  appointment_types?: AppointmentType[];
};

export type ProviderBio = {
  city?: string;
  state?: string;
  gender?: string;
  zip_code?: string | null;
  phone_number?: string;
  date_of_birth?: string | null;
  address_line_1?: string;
  address_line_2?: string;
  street_address?: string;
};

export type ProviderRequestable = {
  location_id: number;
};

export type ProviderLocation = {
  id: number;
  name: string;
  street_address: string | null;
  street_address_2: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  phone_number: string | null;
  email: string | null;
  inactive: boolean;
};

// PARAMS

export type GetProviderQueryParams = {
  include?: ProviderInclude[];
};

type BaseListProvidersQueryParams = {
  location_id?: number;
  ids?: number[];
  foreign_id?: string;
  requestable?: boolean;
  inactive?: boolean;
  updated_since?: string;
  sort?: 'updated_at' | '-updated_at';
  include?: ProviderInclude[];
};

export type ListProvidersQueryParams = BaseListProvidersQueryParams &
  CursorPaginationParams;

export type ListAllProvidersQueryParams = BaseListProvidersQueryParams;

export type ProviderInclude =
  | 'locations'
  | 'availabilities'
  | 'appointment_types';
