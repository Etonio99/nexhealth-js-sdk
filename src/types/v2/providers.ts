import type { Availability } from './availability.js';
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
  locations: Location[];
  provider_requestables: ProviderRequestable[];
  availabilities: Availability[] | null;
};

export type ProviderRequestable = {
  location_id: number;
};
