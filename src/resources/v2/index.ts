import type { RequestFunction } from '../../types/common.js';
import { V2AppointmentsResource } from './appointments.js';
import { V2InstitutionsResource } from './institutions.js';
import { V2LocationsResource } from './locations.js';
import { V2PatientsResource } from './patients.js';

export function createV2Resources(request: RequestFunction) {
  return {
    institutions: V2InstitutionsResource(request),
    locations: V2LocationsResource(request),
    patients: V2PatientsResource(request),
    appointments: V2AppointmentsResource(request),
  };
}

export type V2Resources = ReturnType<typeof createV2Resources>;
