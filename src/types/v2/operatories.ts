import type { AppointmentType } from './appointment_types.js';
import type { PaginationInfo } from './common.js';

export type Operatory = {
  id: number;
  name: string;
  foreign_id: string | null;
  foreign_id_type: string | null;
  location_id: number;
  last_sync_time: string | null;
  created_at: string;
  updated_at: string;
  display_name: string | null;
  profile_url: string | null;
  active: boolean;
  bookable_online: boolean;
  appt_categories?: AppointmentType[];
  appointment_types?: AppointmentType[];
};

//PARAMS

export type GetOperatoryQueryParams = {
  subdomain: string;
  include?: OperatoryInclude[];
};

type BaseListOperatoriesQueryParams = {
  subdomain: string;
  location_id: number;
  search_name?: string;
  foreign_id?: string;
  updated_since?: string;
  include?: OperatoryInclude[];
};

export type ListOperatoriesQueryParams = BaseListOperatoriesQueryParams &
  PaginationInfo;

export type ListAllOperatoriesQueryParams = BaseListOperatoriesQueryParams;

export type OperatoryInclude = 'appt_types' | 'appt_categories';
