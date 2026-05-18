import type { CursorPaginationParams, Price } from './common.js';

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
  fee: Price | null;
  start_date: string | null;
  end_date: string | null;
  treatment_plan_ids: number[];
};

// PARAMS

type BaseListProceduresQueryParams = {
  location_id?: number;
  provider_id?: number;
  patient_id?: number;
  appointment_id?: number;
  updated_since?: string;
  started_after?: string;
  started_before?: string;
  ended_after?: string;
  ended_before?: string;
  sort?: 'updated_at' | '-updated_at';
};

export type ListProceduresQueryParams = BaseListProceduresQueryParams & CursorPaginationParams;

export type ListAllProceduresQueryParams = BaseListProceduresQueryParams;
