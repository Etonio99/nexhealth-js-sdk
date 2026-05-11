import type { LocationBasic } from './locations.js';

export type Emr = {
  id: number;
  name: string;
  display_name: string;
  type: EmrType;
};

export type EmrType = 'cloud' | 'onprem';

export type SyncStatus = {
  institution_id: number;
  sync_source_type: string;
  sync_source_name: string;
  emr: Emr;
  read_status: SyncStatusText;
  read_status_at: string | null;
  write_status: SyncStatusText;
  write_status_at: string | null;
  locations: LocationBasic[];
};

export type SyncStatusText = 'green' | 'red';

// PARAMS

export type ListSyncStatusQueryParams = {
  subdomain: string;
};
