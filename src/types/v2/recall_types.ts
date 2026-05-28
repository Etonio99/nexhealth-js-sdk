export type RecallType = {
  id: number;
  name: string;
  description: string | null;
  foreign_id: string | null;
  foreign_id_type: string | null;
  interval_num: number | null;
  interval_unit: string | null;
  location_id: number;
  created_at: string;
  updated_at: string;
};

export type RecallTypeBasic = Pick<
  RecallType,
  'id' | 'name' | 'description' | 'interval_num' | 'interval_unit'
>;

// PARAMS

export type ListRecallTypesQueryParams = {
  location_id: number;
  foreign_id?: string;
  updated_since?: string;
};
