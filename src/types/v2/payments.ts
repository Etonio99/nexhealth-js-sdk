export type Payment = {
  id: number;
  foreign_id: string;
  location_id: number;
  patient_id: number;
  guarantor_id: number | null;
  provider_id: number | null;
  updated_at: string | null;
  description: string | null;
  deleted_at: string | null;
  payment_amount: {
    amount: string;
    currency: string;
  } | null;
  paid_at: string | null;
  transaction_id: string | null;
  charge_id: number | null;
  claim_id: number | null;
  payment_plan_id: number | null;
  insurance_plan_id: number | null;
  payment_type_id: number | null;
  value: {
    amount: string;
    currency: string;
  };
};
