import type { RequestFunction } from '../../types/common.js';
import { V2024PatientsResource } from './patients.js';

export class V2024Resources {
  readonly patients: ReturnType<typeof V2024PatientsResource>;

  constructor(request: RequestFunction) {
    this.patients = V2024PatientsResource(request);
  }
}
