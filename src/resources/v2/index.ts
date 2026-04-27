import type { RequestFunction } from '../../types/common.js';
import { V2AppointmentsResource } from './appointments.js';
import { V2InstitutionsResource } from './institutions.js';
import { V2LocationsResource } from './locations.js';
import { V2PatientsResource } from './patients.js';

export class V2Resources {
  readonly institutions: ReturnType<typeof V2InstitutionsResource>;
  readonly locations: ReturnType<typeof V2LocationsResource>;

  readonly patients: ReturnType<typeof V2PatientsResource>;
  readonly appointments: ReturnType<typeof V2AppointmentsResource>;

  constructor(request: RequestFunction) {
    this.institutions = V2InstitutionsResource(request);
    this.locations = V2LocationsResource(request);

    this.patients = V2PatientsResource(request);
    this.appointments = V2AppointmentsResource(request);
  }
}
