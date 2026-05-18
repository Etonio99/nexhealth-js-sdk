import type { CursorPaginationParams } from './common.js';
import type { FeeScheduleProcedureBasic } from './fee_schedule_procedures.js';

export type FeeSchedule = {
  id: number;
  name: string;
  active: boolean;
  location_id: number;
  updated_at: string;
  procedure_fees?: FeeScheduleProcedureBasic[];
};

// PARAMS

export type GetFeeScheduleQueryParams = {
  include?: FeeScheduleInclude[];
};

type BaseListFeeSchedulesQueryParams = {
  location_id: number;
  updated_since?: string;
  active?: boolean;
};

export type ListFeeSchedulesQueryParams = BaseListFeeSchedulesQueryParams & CursorPaginationParams;

export type ListAllFeeSchedulesQueryParams = BaseListFeeSchedulesQueryParams;

export type FeeScheduleInclude = 'procedure_fees';
