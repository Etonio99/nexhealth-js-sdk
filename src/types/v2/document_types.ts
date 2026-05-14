export type DocumentType = {
  id: number;
  name: string;
  active: boolean;
};

// PARAMS

export type GetDocumentTypeQueryParams = {
  location_id: number;
};

export type ListDocumentTypesQueryParams = {
  location_id: number;
  active?: boolean;
};
