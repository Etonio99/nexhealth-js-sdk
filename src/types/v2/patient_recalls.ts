import type { PaginationParams } from './common.js';
import type { RecallTypeBasic } from './recall_types.js';

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
  PaginationParams;

export type ListAllPatientRecallsQueryParams =
  BaseListPatientRecallsQueryParams;
