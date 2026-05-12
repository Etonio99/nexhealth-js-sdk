import type { AppointmentType } from './appointment_types.js';
import type { PaginationParams } from './common.js';

export type Availability = {
  id: number;
  provider_id: number | null;
  location_id: number | null;
  operatory_id: number | null;
  begin_time: string;
  end_time: string;
  days: string[];
  specific_date: string | null;
  custom_recurrence: CustomRecurrence | null;
  tz_offset: string;
  active: boolean;
  synced: boolean;
  appointment_types?: AppointmentType[];
};

export type CustomRecurrence = {
  num: number;
  unit: string;
  ref: string;
};

// PARAMS

export type GetAvailabilityQueryParams = {
  subdomain: string;
  include?: AvailabilityInclude[];
};

export type BaseListAvailabilitiesQueryParams = {
  subdomain: string;
  location_id: number;
  include?: AvailabilityInclude[];
  provider_id?: number;
  operatory_id?: number;
  active?: boolean;
  ignore_past_dates?: boolean;
};

export type ListAvailabilitiesQueryParams = BaseListAvailabilitiesQueryParams &
  PaginationParams;

export type ListAllAvailabilitiesQueryParams =
  BaseListAvailabilitiesQueryParams;

export type CreateAvailabilityQueryParams = {
  subdomain: string;
  location_id: string;
};

type BaseAvailabilityParams = {
  availability: {
    provider_id: number;
    begin_time: string;
    end_time: string;
    operatory_id?: number;
    appointment_type_ids?: number[];
    days?: Weekday[];
    specific_date?: string;
    custom_recurrence?: CustomRecurrence;
    active?: boolean;
  };
};

export type CreateAvailabilityBodyParams = BaseAvailabilityParams;

export type DeleteAvailabilityQueryParams = {
  subdomain: string;
};

export type EditAvailabilityQueryParams = {
  subdomain: string;
};

export type EditAvailabilityBodyParams = BaseAvailabilityParams;

export type Weekday =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

export type AvailabilityInclude = 'appointment_types';
