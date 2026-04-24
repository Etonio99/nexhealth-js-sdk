import type { RequestFunction } from '../../types/common.js';
import { V2PatientsResource } from './patients.js';

export class V2Resources {
  readonly patients: ReturnType<typeof V2PatientsResource>;

  constructor(request: RequestFunction) {
    this.patients = V2PatientsResource(request);
  }
}
