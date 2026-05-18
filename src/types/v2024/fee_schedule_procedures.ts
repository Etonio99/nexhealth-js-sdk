import type { CursorPaginationParams, Price } from './common.js';

export type FeeScheduleProcedure = {
  id: number;
  procedure_code_id: string;
  fee: Price;
  code: string;
  location_id: number;
  fee_schedule_id: number;
  updated_at: string;
};

export type FeeScheduleProcedureBasic = {
  procedure_code_id: string;
  fee: Price;
  code: string;
};

// PARAMS

type BaseListFeeScheduleProceduresQueryParams = {
  location_id: number;
  fee_schedule_id?: number;
  updated_since?: string;
};

export type ListFeeScheduleProceduresQueryParams = BaseListFeeScheduleProceduresQueryParams &
  CursorPaginationParams;

export type ListAllFeeScheduleProceduresQueryParams = BaseListFeeScheduleProceduresQueryParams;
