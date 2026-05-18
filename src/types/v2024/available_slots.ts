export type AvailableSlotResponse = {
  lid: number;
  pid: number | null;
  operatory_id: number | null;
  slots: AvailableSlot[];
  next_available_date: string | null;
};

export type AvailableSlot = {
  time: string;
  end_time: string;
  operatory_id: number | null;
  provider_id: number | null;
  working_hour_label_id: number | null;
};

// PARAMS

export type ListAvailableSlotsQueryParams = {
  start_date: string;
  days: number;
  lids: number[];
  pids?: number[];
  operatory_ids?: number[];
  appointment_type_id?: number;
  working_hour_label_id?: number;
  working_hour_source?: string;
  slot_length?: number;
  slot_interval?: number;
  overlapping_operatory_slots?: boolean;
  appointments_per_timeslot?: number;
};
