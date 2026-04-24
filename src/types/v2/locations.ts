export type Locations = {
  id: number;
  name: string;
  subdomain: string;
  locations: Location[];
};

export type Location = {
  id: number;
  name: string;
  institution_id: number;
  street_address: string | null;
  street_address_2: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  country_code: string | null;
  created_at: string;
  updated_at: string;
  latitude: number | null;
  longitude: number | null;
  phone_number: string | null;
  foreign_id: string | null;
  foreign_id_type: string | null;
  email: string | null;
  tz: string;
  last_sync_time: string | null;
  insert_appt_client: boolean;
  map_by_operatory: boolean;
  appt_types_map_by_operatory: boolean;
  set_availability_by_operatory: boolean;
  inactive: boolean;
  wlogo: string | null;
  weight: number | null;
};
