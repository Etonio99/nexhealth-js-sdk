import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreatePatientAlertBodyParams,
  ListPatientAlertsQueryParams,
  PatientAlert,
  UpdatePatientAlertBodyParams,
} from '../../types/v2/patient_alerts.js';

export function V2PatientAlertsResource(request: RequestFunction) {
  return {
    create: (patientId: number, bodyParams: CreatePatientAlertBodyParams) =>
      request<NexHealthResponse<PatientAlert>>(
        `patients/${patientId}/alerts`,
        'POST',
        undefined,
        bodyParams
      ),
    get: (patientId: number, alertId: number) =>
      request<NexHealthResponse<PatientAlert>>(
        `patients/${patientId}/alerts/${alertId}`,
        'GET'
      ),
    update: (
      patientId: number,
      alertId: number,
      bodyParams: UpdatePatientAlertBodyParams
    ) =>
      request<NexHealthResponse<PatientAlert>>(
        `patients/${patientId}/alerts/${alertId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
    list: (patientId: number, queryParams?: ListPatientAlertsQueryParams) =>
      request<NexHealthResponse<PatientAlert[]>>(
        `patients/${patientId}/alerts`,
        'GET',
        queryParams
      ),
  };
}
