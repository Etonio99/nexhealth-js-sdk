export type AppointmentType = {
  id: number;
  name: string;
  parent_type: string | null;
  parent_type_id: number | null;
  minutes: number;
  bookable_online: boolean;
};
