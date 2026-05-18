import type { CursorPaginationParams } from './common.js';

export type PatientRecall = {
  id: number;
  appointment_id: number | null;
  date_due: string;
  foreign_id: string | null;
  foreign_id_type: string | null;
  recall_id: number | null;
  recall_type: RecallTypeBasic;
  patient_id: number;
  created_at: string;
  updated_at: string;
};

export type RecallTypeBasic = {
  id: number;
  name: string;
  description: string | null;
  interval_num: number | null;
  interval_unit: string | null;
};

// PARAMS

type BaseListPatientRecallsQueryParams = {
  location_id: number;
  recall_id?: number;
  patient_id?: number;
  foreign_id?: string;
  updated_since?: string;
  due_after?: string;
  sort?: 'date_due' | '-date_due';
};

export type ListPatientRecallsQueryParams = BaseListPatientRecallsQueryParams &
  CursorPaginationParams;

export type ListAllPatientRecallsQueryParams = BaseListPatientRecallsQueryParams;
