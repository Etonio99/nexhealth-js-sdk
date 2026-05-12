import type { RequestFunction } from '../../types/common.js';
import { V2AppointmentSlotsResource } from './appointment_slots.js';
import { V2AppointmentTypesResource } from './appointment_types.js';
import { V2AppointmentsResource } from './appointments.js';
import { V2AvailabilitiesResource } from './availabilities.js';
import { V2DocumentTypesResource } from './document_types.js';
import { V2InstitutionsResource } from './institutions.js';
import { V2LocationsResource } from './locations.js';
import { V2OperatoriesResource } from './operatories.js';
import { V2PatientsResource } from './patients.js';
import { V2ProceduresResource } from './procedures.js';
import { V2ProvidersResource } from './providers.js';

export function createV2Resources(request: RequestFunction) {
  return {
    appointmentSlots: V2AppointmentSlotsResource(request),
    appointmentTypes: V2AppointmentTypesResource(request),
    appointments: V2AppointmentsResource(request),
    availabilities: V2AvailabilitiesResource(request),
    documentTypes: V2DocumentTypesResource(request),
    institutions: V2InstitutionsResource(request),
    locations: V2LocationsResource(request),
    operatories: V2OperatoriesResource(request),
    patients: V2PatientsResource(request),
    procedures: V2ProceduresResource(request),
    providers: V2ProvidersResource(request),
  };
}

export type V2Resources = ReturnType<typeof createV2Resources>;
