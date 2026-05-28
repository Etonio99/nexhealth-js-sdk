import type { CursorPaginationParams } from './common.js';
import type { Procedure } from './procedures.js';

export type TreatmentPlan = {
  id: number;
  name: string;
  patient_id: number;
  updated_at: string;
  status:
    | 'proposed'
    | 'accepted'
    | 'rejected'
    | 'in_progress'
    | 'completed'
    | 'cancelled';
  procedures: Procedure[];
};

// PARAMS

type BaseListTreatmentPlansQueryParams = {
  patient_id?: number;
  status?: TreatmentPlanStatus;
  updated_since?: string;
};

export type ListTreatmentPlansQueryParams = BaseListTreatmentPlansQueryParams &
  CursorPaginationParams;

export type ListAllTreatmentPlansQueryParams =
  BaseListTreatmentPlansQueryParams;

export type TreatmentPlanStatus =
  | 'proposed'
  | 'accepted'
  | 'rejected'
  | 'in_progress'
  | 'completed'
  | 'cancelled';
