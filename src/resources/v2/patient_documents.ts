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
    ) => {
      const formData = new FormData();
      formData.append('file', bodyParams.file);
      if (bodyParams.document_type_id != null) {
        formData.append(
          'document_type_id',
          String(bodyParams.document_type_id)
        );
      }
      return request<NexHealthApiResponse<PatientDocument>>(
        `patients/${patientId}/documents`,
        'POST',
        queryParams,
        formData
      );
    },
    list: (patientId: number, queryParams: ListPatientDocumentsQueryParams) =>
      request<NexHealthApiResponse<PatientDocument[]>>(
        `patients/${patientId}/documents`,
        'GET',
        queryParams
      ),
  };
}
