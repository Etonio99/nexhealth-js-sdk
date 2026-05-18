export type ProviderSearchResult = {
  id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  inactive: boolean;
  npi: string | null;
  locations: ProviderSearchLocation[];
  institutions: ProviderSearchInstitution[];
};

export type ProviderSearchLocation = {
  id: number;
  name: string;
  street_address: string | null;
  street_address_2: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  phone_number: string | null;
  email: string | null;
};

export type ProviderSearchInstitution = {
  id: number;
  name: string;
  subdomain: string;
};

// PARAMS

export type ListProviderSearchQueryParams = {
  name_query?: string;
  npi?: string;
  zip_code?: string;
  page?: number;
  per_page?: number;
};
