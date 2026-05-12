import type { AppointmentType } from './appointment_types.js';
import type { Availability } from './availabilities.js';
import type { PaginationInfo } from './common.js';
import type { NexLocation } from './locations.js';
import type { Bio } from './patients.js';

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
  bio: Bio;
  inactive: boolean;
  last_sync_time: string | null;
  display_name: string | null;
  npi: string | null;
  tin: string | null;
  state_license: string | null;
  specialty_code: string | null;
  nexhealth_specialty: string | null;
  provider_requestables: ProviderRequestable[];
  locations?: NexLocation[];
  availabilities?: Availability[] | null;
  appointment_types?: AppointmentType[];
};

export type ProviderRequestable = {
  location_id: number;
};

// PARAMS

export type GetProviderQueryParams = {
  subdomain: string;
  include?: ProviderInclude[];
};

type BaseListProvidersQueryParams = {
  subdomain: string;
  include?: ProviderInclude[];
  location_id?: number;
  ids?: number[];
  foreign_id?: string;
  requestable?: boolean;
  inactive?: boolean;
  updated_since?: string;
};

export type ListProvidersQueryParams = BaseListProvidersQueryParams &
  PaginationInfo;

export type ListAllProvidersQueryParams = BaseListProvidersQueryParams;

export type ProviderInclude =
  | 'locations'
  | 'availabilities'
  | 'appointment_types';
