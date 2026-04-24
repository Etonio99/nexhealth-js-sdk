export type Procedure = {
  id: number;
  location_id: number;
  patient_id: number;
  provider_id: number;
  appointment_id: number | null;
  code: string;
  name: string;
  status: 'planned' | 'scheduled' | 'completed' | 'inactive' | 'referred';
  updated_at: string;
  body_site: unknown;
  fee: {
    amount: string;
    currency: string;
  } | null;
  start_date: string | null;
  end_date: string | null;
};
