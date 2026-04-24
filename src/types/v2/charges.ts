export type Charge = {
  id: number;
  foreign_id: string;
  location_id: number;
  patient_id: number;
  guarantor_id: number | null;
  provider_id: number | null;
  procedure_id: number | null;
  procedure_code: string | null;
  updated_at: string | null;
  description: string | null;
  fee: {
    amount: string;
    currency: string;
  };
  charged_at: string | null;
  deleted_at: string | null;
};
