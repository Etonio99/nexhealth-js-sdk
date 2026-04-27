import type { RequestFunction } from '../../types/common.js';
import { V2AppointmentsResource } from './appointments.js';
import { V2InstitutionsResource } from './institutions.js';
import { V2PatientsResource } from './patients.js';

export class V2Resources {
  readonly patients: ReturnType<typeof V2PatientsResource>;
  readonly appointments: ReturnType<typeof V2AppointmentsResource>;
  readonly institutions: ReturnType<typeof V2InstitutionsResource>;

  constructor(request: RequestFunction) {
    this.patients = V2PatientsResource(request);
    this.appointments = V2AppointmentsResource(request);
    this.institutions = V2InstitutionsResource(request);
  }
}
