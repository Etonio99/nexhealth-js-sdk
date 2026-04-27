import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type { Institution } from '../../types/v2/institutions.js';

export function V2InstitutionsResource(request: RequestFunction) {
  return {
    get: (institutionId: number) =>
      request<NexHealthApiResponse<Institution>>(
        `institutions/${institutionId}`
      ),
    list: () => request<NexHealthApiResponse<Institution[]>>('institutions'),
  };
}
