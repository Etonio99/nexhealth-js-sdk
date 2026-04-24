export type PatientAlert = {
  id: number;
  patient_id: number;
  note: string | null;
  disabled_at: string | null;
  created_at: string;
  updated_at: string;
};
