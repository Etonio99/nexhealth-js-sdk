export type WebhookSubscription = {
  id: number;
  webhook_endpoint_id: number;
  institution_id: number;
  resource_type: WebhookResourceType;
  event: WebhookEvent;
  active: boolean;
  created_at: string;
  updated_at: string;
};

// PARAMS

export type ListWebhookSubscriptionsQueryParams = {
  subdomain: string;
  resource_type?: WebhookResourceType;
  event?: WebhookEvent;
};

export type CreateWebhookSubscriptionQueryParams = {
  subdomain: string;
};

export type CreateWebhookSubscriptionBodyParams = {
  resource_type: WebhookResourceType;
  event: WebhookEvent;
  active?: boolean;
};

export type UpdateWebhookSubscriptionBodyParams = {
  new_endpoint_id?: number;
  active?: boolean;
};

export type WebhookResourceType =
  | 'Appointment'
  | 'FormRequest'
  | 'FormResponse'
  | 'Document'
  | 'Patient'
  | 'PatientInsuranceCoverage'
  | 'Procedure'
  | 'SyncStatus';

export type WebhookEvent =
  | 'appointment_insertion'
  | 'appointment_created'
  | 'appointment_updated'
  | 'appointment_requested'
  | 'form_request_completed'
  | 'form_response_insertion'
  | 'document_insertion'
  | 'patient_created'
  | 'patient_updated'
  | 'patient_insurance_created'
  | 'patient_insurance_updated'
  | 'procedure_created'
  | 'procedure_updated'
  | 'sync_status_read_change'
  | 'sync_status_write_change';
