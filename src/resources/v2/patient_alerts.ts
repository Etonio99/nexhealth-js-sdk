import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreatePatientAlertBodyParams,
  CreatePatientAlertQueryParams,
  GetPatientAlertQueryParams,
  ListPatientAlertsQueryParams,
  PatientAlert,
  UpdatePatientAlertBodyParams,
  UpdatePatientAlertQueryParams,
} from '../../types/v2/patient_alerts.js';

export function V2PatientAlertsResource(request: RequestFunction) {
  return {
    create: (
      patientId: number,
      queryParams: CreatePatientAlertQueryParams,
      bodyParams: CreatePatientAlertBodyParams
    ) =>
      request<NexHealthApiResponse<PatientAlert>>(
        `patients/${patientId}/alerts`,
        'POST',
        queryParams,
        bodyParams
      ),
    get: (
      patientId: number,
      alertId: number,
      queryParams: GetPatientAlertQueryParams
    ) =>
      request<NexHealthApiResponse<PatientAlert>>(
        `patients/${patientId}/alerts/${alertId}`,
        'GET',
        queryParams
      ),
    update: (
      patientId: number,
      alertId: number,
      queryParams: UpdatePatientAlertQueryParams,
      bodyParams: UpdatePatientAlertBodyParams
    ) =>
      request<NexHealthApiResponse<PatientAlert>>(
        `patients/${patientId}/alerts/${alertId}`,
        'PATCH',
        queryParams,
        bodyParams
      ),
    list: (patientId: number, queryParams: ListPatientAlertsQueryParams) =>
      request<NexHealthApiResponse<PatientAlert[]>>(
        `patients/${patientId}/alerts`,
        'GET',
        queryParams
      ),
  };
}
