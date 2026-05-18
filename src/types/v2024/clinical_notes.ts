import type { CursorPaginationParams } from './common.js';

export type ClinicalNote = {
  id: number;
  patient_id: number;
  procedure_id: number | null;
  entered_at: string;
  content: string;
  signed: boolean | null;
  completed: boolean | null;
  updated_at: string;
};

// PARAMS

type BaseListClinicalNotesQueryParams = {
  location_id: number;
  patient_id?: number;
  procedure_id?: number;
  entered_before?: string;
  entered_after?: string;
  updated_since?: string;
};

export type ListClinicalNotesQueryParams = BaseListClinicalNotesQueryParams &
  CursorPaginationParams;

export type ListAllClinicalNotesQueryParams = BaseListClinicalNotesQueryParams;
