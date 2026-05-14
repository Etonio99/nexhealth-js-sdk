import type { Patient } from './patients.js';

export type PaymentPlan = {
  id: number;
  patient_id: number;
  guarantor_id: number | null;
  first_payment_due_date: string | null;
  created_date: string;
  active: boolean;
  patient?: Patient;
  guarantor?: Patient;
};

// PARAMS

export type ListPaymentPlansQueryParams = {
  location_id: number;
  patient_id?: number;
  include?: PaymentPlanInclude[];
  page?: number;
  per_page?: number;
};

export type PaymentPlanInclude = 'patient' | 'guarantor';
