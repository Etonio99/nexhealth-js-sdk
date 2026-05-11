export type DocumentType = {
  id: number;
  name: string;
  active: boolean;
};

export type PatientDocument = {
  id: number;
  filename: string;
  type: string;
  url: string;
  created_at: string;
  document_type_id: number | null;
};

// PARAMS

export type ListDocumentTypesQueryParams = {
  subdomain: string;
};

export type ListPatientDocumentsQueryParams = {
  subdomain: string;
  page?: number;
  per_page?: number;
};

export type CreatePatientDocumentQueryParams = {
  subdomain: string;
  location_id: number;
};

export type CreatePatientDocumentBodyParams = {
  file: File;
  name?: string;
  document_type_id?: number;
};
