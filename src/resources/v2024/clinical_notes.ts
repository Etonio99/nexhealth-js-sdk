import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  ClinicalNote,
  ListAllClinicalNotesQueryParams,
  ListClinicalNotesQueryParams,
} from '../../types/v2024/clinical_notes.js';
import { cursorPaginateAll } from './cursor_pagination.js';

export function V2024ClinicalNotesResource(request: RequestFunction) {
  return {
    list: (queryParams: ListClinicalNotesQueryParams) =>
      request<NexHealthResponse<ClinicalNote[]>>(
        'clinical_notes',
        'GET',
        queryParams
      ),
    listAll: (queryParams: ListAllClinicalNotesQueryParams) =>
      cursorPaginateAll<ClinicalNote>(request, 'clinical_notes', queryParams),
  };
}
