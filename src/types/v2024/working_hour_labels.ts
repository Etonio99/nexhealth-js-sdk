import type { CursorPaginationParams } from './common.js';

export type WorkingHourLabel = {
  id: number;
  location_id: number;
  name: string;
};

// PARAMS

type BaseListWorkingHourLabelsQueryParams = {
  location_id?: number;
  search_name?: string;
  active?: boolean;
};

export type ListWorkingHourLabelsQueryParams = BaseListWorkingHourLabelsQueryParams &
  CursorPaginationParams;

export type ListAllWorkingHourLabelsQueryParams = BaseListWorkingHourLabelsQueryParams;
