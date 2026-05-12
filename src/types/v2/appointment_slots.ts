export type AppointmentSlots = {
  lid: number;
  pid: number | null;
  operatory_id: number | null;
  slots: AppointmentSlot[] | null;
  next_available_date: string | null;
};

export type AppointmentSlot = {
  time: string;
  end_time: string;
  operatory_id: number | null;
  provider_id: number | null;
};

export type ListAppointmentSlotsQueryParams = {
  subdomain: string;
  start_date: string;
  days: number;
  lids: number[];
  pids: number[];
  operatory_ids?: number[];
  appointment_type_id?: number;
  slot_length?: number;
  slot_interval?: number;
  overlapping_operatory_slots?: boolean;
};
