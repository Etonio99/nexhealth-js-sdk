import type { AppointmentType } from './appointment_types.js';
import type { CursorPaginationParams } from './common.js';
import type { WorkingHourLabel } from './working_hour_labels.js';

export type WorkingHour = {
  id: number;
  provider_id: number;
  location_id: number;
  operatory_id: number | null;
  begin_time: string;
  end_time: string;
  days: string[];
  specific_date: string | null;
  custom_recurrence: CustomRecurrence | null;
  tz_offset: string;
  active: boolean;
  source: string;
  label: WorkingHourLabel | null;
  appointment_types?: AppointmentType[];
};

export type CustomRecurrence = {
  num: number;
  unit: string;
  ref: string;
};

// PARAMS

export type GetWorkingHourQueryParams = {
  include?: WorkingHourInclude[];
};

type BaseListWorkingHoursQueryParams = {
  location_id: number;
  provider_id?: number;
  operatory_id?: number;
  label_id?: number;
  source?: string;
  active?: boolean;
  ignore_past_dates?: boolean;
  include?: WorkingHourInclude[];
};

export type ListWorkingHoursQueryParams = BaseListWorkingHoursQueryParams & CursorPaginationParams;

export type ListAllWorkingHoursQueryParams = BaseListWorkingHoursQueryParams;

export type CreateWorkingHourQueryParams = {
  location_id: number;
};

type BaseWorkingHourBodyParams = {
  working_hour: {
    provider_id: number;
    begin_time: string;
    end_time: string;
    operatory_id?: number;
    appointment_type_ids?: number[];
    days?: string[];
    specific_date?: string;
    custom_recurrence?: CustomRecurrence;
    active?: boolean;
    label_id?: number;
  };
};

export type CreateWorkingHourBodyParams = BaseWorkingHourBodyParams;

export type UpdateWorkingHourBodyParams = BaseWorkingHourBodyParams;

export type WorkingHourInclude = 'appointment_types';
