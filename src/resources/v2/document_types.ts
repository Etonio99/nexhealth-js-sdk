import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  DocumentType,
  GetDocumentTypeQueryParams,
  ListDocumentTypesQueryParams,
} from '../../types/v2/document_types.js';

export function V2DocumentTypesResource(request: RequestFunction) {
  return {
    get: (documentTypeId: number, queryParams: GetDocumentTypeQueryParams) =>
      request<NexHealthApiResponse<DocumentType>>(
        `document_types/${documentTypeId}`,
        'GET',
        queryParams
      ),
    list: (queryParams: ListDocumentTypesQueryParams) =>
      request<NexHealthApiResponse<DocumentType[]>>(
        'document_types',
        'GET',
        queryParams
      ),
  };
}
