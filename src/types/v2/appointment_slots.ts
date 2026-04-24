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
