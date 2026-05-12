import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreatePatientDocumentBodyParams,
  CreatePatientDocumentQueryParams,
  ListPatientDocumentsQueryParams,
  PatientDocument,
} from '../../types/v2/patient_documents.js';

export function V2PatientDocumentsResource(request: RequestFunction) {
  return {
    create: (
      patientId: number,
      queryParams: CreatePatientDocumentQueryParams,
      bodyParams: CreatePatientDocumentBodyParams
    ) =>
      request<NexHealthApiResponse<PatientDocument>>(
        `patients/${patientId}/documents`,
        'POST',
        queryParams,
        bodyParams
      ),
    list: (patientId: number, queryParams: ListPatientDocumentsQueryParams) =>
      request<NexHealthApiResponse<PatientDocument[]>>(
        `patients/${patientId}/documents`,
        'GET',
        queryParams
      ),
  };
}
