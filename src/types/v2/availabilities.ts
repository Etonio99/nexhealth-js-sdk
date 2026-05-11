import type { AppointmentType } from './appointment_types.js';

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
