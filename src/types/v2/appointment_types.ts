export type AppointmentType = {
  id: number;
  name: string;
  parent_type: string;
  parent_id: number;
  minutes: number;
  bookable_online: boolean;
};
