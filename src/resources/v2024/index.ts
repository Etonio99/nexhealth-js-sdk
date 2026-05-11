import type { RequestFunction } from '../../types/common.js';
import { V2024PatientsResource } from './patients.js';

export function createV2024Resources(request: RequestFunction) {
  return {
    patients: V2024PatientsResource(request),
  };
}

export type V2024Resources = ReturnType<typeof createV2024Resources>;
