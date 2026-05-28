import type { CursorPaginationParams } from './common.js';

export type AdjustmentType = {
  id: number;
  name: string;
  active: boolean;
  action: 'credit' | 'debit' | 'unknown';
  updated_at: string;
};

// PARAMS

type BaseListAdjustmentTypesQueryParams = {
  location_id: number;
  updated_since?: string;
  active?: boolean;
};

export type ListAdjustmentTypesQueryParams =
  BaseListAdjustmentTypesQueryParams & CursorPaginationParams;

export type ListAllAdjustmentTypesQueryParams =
  BaseListAdjustmentTypesQueryParams;
