export type PatientDocument = {
  id: number;
  filename: string;
  type: string;
  url: string;
  created_at: string;
  document_type_id: number | null;
};

// PARAMS

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
  file: Blob;
  document_type_id?: number;
};
