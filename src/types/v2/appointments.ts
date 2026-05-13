import type { AppointmentType } from './appointment_types.js';
import type { PaginationParams } from './common.js';
import type { Operatory } from './operatories.js';
import type { Patient } from './patients.js';
import type { Procedure } from './procedures.js';

export type Appointment = {
  id: number;
  patient_id: number | null;
  provider_id: number | null;
  provider_name: string | null;
  start_time: string;
  confirmed: boolean;
  patient_missed: boolean;
  created_at: string;
  updated_at: string;
  note: string | null;
  end_time: string;
  unavailable: boolean;
  cancelled: boolean;
  timezone: string;
  institution_id: number;
  appointment_type_id: number | null;
  checkin_at: string | null;
  location_id: number;
  foreign_id: string | null;
  foreign_id_type: string;
  misc: unknown;
  last_sync_time: string;
  patient_confirmed: boolean;
  created_by_user_id: number | null;
  is_guardian: boolean;
  patient_confirmed_at: string | null;
  cancelled_at: string | null;
  is_new_clients_patient: boolean | null;
  confirmed_at: string | null;
  sooner_if_possible: boolean;
  operatory_id: number | null;
  deleted: boolean;
  checked_out: boolean;
  checked_out_at: string | null;
  referrer: string | null;
  is_past_patient: boolean | null;
  timezone_offset: string;
  patient: Patient | null;
  operatory?: Operatory;
  appointment_type?: AppointmentType;
  procedures?: Procedure[];
  descriptors?: AppointmentDescriptor[];
  booking_details?: BookingDetails;
};

export type BookingDetails = {
  booked_via_nexhealth_generated_link: boolean;
  campaign_type:
    | 'cancelled_recall'
    | 'continuing_care_recall'
    | 'manual'
    | 'missed_recall'
    | 'recall'
    | 'google_booking'
    | null;
  campaign_id: string | null;
  campaign_medium: string | null;
  booked_via_one_click: boolean;
};

export type AppointmentDescriptor = {
  id: number;
  descriptor_type: string;
  name: string;
  code: string;
  location_id: number;
  foreign_id: string;
  foreign_id_type: string;
  data: unknown;
  active: boolean;
  last_sync_time: string | null;
  created_at: string;
  updated_at: string;
};

// PARAMS

export type CreateAppointmentQueryParams = {
  subdomain: string;
  location_id: number;
  notify_patient?: boolean;
};

export type CreateAppointmentBodyParams = {
  appt: {
    patient_id: number;
    provider_id: number;
    start_time: string;
    end_time?: string;
    appointment_type_id?: number;
    operatory_id?: number;
    note?: string;
    unavailable?: boolean;
    is_guardian?: boolean;
    is_new_clients_patient?: boolean;
    referrer?: string;
    descriptor_ids?: number[];
    patient?: {
      first_name: string;
      last_name: string;
      bio: {
        date_of_birth: string;
        gender?: 'Male' | 'Female' | 'Other';
      };
    };
  };
};

export type GetAppointmentQueryParams = {
  subdomain: string;
  include?: AppointmentInclude[];
};

type BaseListAppointmentsQueryParams = {
  subdomain: string;
  location_id: number;
  start: string;
  end: string;
  timezone?: string;
  cancelled?: boolean;
  unavailable?: boolean;
  nex_only?: boolean;
  updated_since?: string;
  appointment_type_id?: number;
  foreign_id?: string;
  patient_id?: number;
  provider_ids?: number[];
  operatory_ids?: number[];
  created_by?: number;
  include?: AppointmentInclude[];
};

export type ListAppointmentsQueryParams = BaseListAppointmentsQueryParams &
  PaginationParams;

export type ListAllAppointmentsQueryParams = BaseListAppointmentsQueryParams;

export type AppointmentInclude =
  | 'patient'
  | 'guarantor'
  | 'descriptors'
  | 'booking_details'
  | 'procedures'
  | 'operatory'
  | 'appointment_type';

export type UpdateAppointmentQueryParams = {
  subdomain: string;
};

export type UpdateAppointmentBodyParams = {
  appt: {
    confirmed?: boolean;
    cancelled?: boolean;
  };
};

export type ListAppointmentDescriptorsQueryParams = {
  subdomain: string;
  descriptor_type?: string;
};
