import type { PaginationParams } from './common.js';

export type NexStaff = {
  id: number;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  created_at: string;
  updated_at: string;
  patientable: boolean;
  inst_ids: number[];
  unsubscribe_emails: boolean;
  unsubscribe_sms: boolean;
  inactive: boolean;
  location_ids: number[];
};

// PARAMS

type BaseListNexStaffQueryParams = {
  inactive: boolean;
  location_ids: number[];
};

export type ListNexStaffQueryParams = BaseListNexStaffQueryParams &
  PaginationParams;

export type ListAllNexStaffQueryParams = BaseListNexStaffQueryParams;
