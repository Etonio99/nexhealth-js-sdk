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
  subdomain?: string;
  resource_type?: WebhookResourceType;
  event?: WebhookEvent;
};

export type CreateWebhookSubscriptionBodyParams = {
  subdomain?: string;
  resource_type: WebhookResourceType;
  event: WebhookEvent;
  active?: boolean;
};

export type UpdateWebhookSubscriptionBodyParams = {
  new_endpoint_id?: number;
  active?: boolean;
};

export type WebhookResourceType =
  | 'Adjustment'
  | 'AdjustmentType'
  | 'Appointment'
  | 'Charge'
  | 'Claim'
  | 'Conversation'
  | 'Document'
  | 'FeeSchedule'
  | 'FormRequest'
  | 'FormResponse'
  | 'Message'
  | 'Onboarding'
  | 'Patient'
  | 'PatientInsuranceCoverage'
  | 'Payment'
  | 'PaymentType'
  | 'Procedure'
  | 'ProcedureCode'
  | 'SyncStatus'
  | 'TreatmentPlan';

export type WebhookEvent =
  | 'adjustment_created'
  | 'adjustment_updated'
  | 'adjustment_deleted'
  | 'adjustment_insertion'
  | 'adjustment_type_created'
  | 'adjustment_type_updated'
  | 'appointment_insertion'
  | 'appointment_created'
  | 'appointment_updated'
  | 'appointment_requested'
  | 'charge_created'
  | 'charge_updated'
  | 'charge_deleted'
  | 'claim_created'
  | 'claim_updated'
  | 'claim_deleted'
  | 'conversation_created'
  | 'conversation_updated'
  | 'document_insertion'
  | 'fee_schedule_created'
  | 'fee_schedule_updated'
  | 'form_request_completed'
  | 'form_response_insertion'
  | 'message_created'
  | 'message_updated'
  | 'onboarding_created'
  | 'onboarding_updated'
  | 'patient_created'
  | 'patient_updated'
  | 'patient_insurance_created'
  | 'patient_insurance_updated'
  | 'payment_created'
  | 'payment_updated'
  | 'payment_deleted'
  | 'payment_type_created'
  | 'payment_type_updated'
  | 'procedure_created'
  | 'procedure_updated'
  | 'procedure_code_created'
  | 'procedure_code_updated'
  | 'procedure_code_deleted'
  | 'sync_status_read_change'
  | 'sync_status_write_change'
  | 'treatment_plan_created'
  | 'treatment_plan_updated';
