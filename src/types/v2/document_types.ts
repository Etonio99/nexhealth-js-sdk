export type DocumentType = {
  id: number;
  name: string;
  active: boolean;
};

// PARAMS

export type GetDocumentTypeQueryParams = {
  subdomain: string;
  location_id: number;
};

export type ListDocumentTypesQueryParams = {
  subdomain: string;
  location_id: number;
  active?: boolean;
};
