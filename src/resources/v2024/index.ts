import type { RequestFunction } from '../../types/common.js';
import { V2024AdjustmentTypesResource } from './adjustment_types.js';
import { V2024AdjustmentsResource } from './adjustments.js';
import { V2024AppointmentsResource } from './appointments.js';
import { V2024AvailableSlotsResource } from './available_slots.js';
import { V2024ChargesResource } from './charges.js';
import { V2024ClinicalNotesResource } from './clinical_notes.js';
import { V2024FeeScheduleProceduresResource } from './fee_schedule_procedures.js';
import { V2024FeeSchedulesResource } from './fee_schedules.js';
import { V2024GuarantorBalancesResource } from './guarantor_balances.js';
import { V2024InsuranceBalancesResource } from './insurance_balances.js';
import { V2024InsuranceClaimsResource } from './insurance_claims.js';
import { V2024InsuranceCoveragesResource } from './insurance_coverages.js';
import { V2024InsurancePlansResource } from './insurance_plans.js';
import { V2024OnboardingsResource } from './onboardings.js';
import { V2024OperatoriesResource } from './operatories.js';
import { V2024PatientRecallsResource } from './patient_recalls.js';
import { V2024PatientsResource } from './patients.js';
import { V2024PaymentTypesResource } from './payment_types.js';
import { V2024PaymentsResource } from './payments.js';
import { V2024ProceduresResource } from './procedures.js';
import { V2024ProviderSearchResource } from './provider_search.js';
import { V2024ProvidersResource } from './providers.js';
import { V2024TreatmentPlansResource } from './treatment_plans.js';
import { V2024WebhookSubscriptionsResource } from './webhook_subscriptions.js';
import { V2024WorkingHourLabelsResource } from './working_hour_labels.js';
import { V2024WorkingHoursResource } from './working_hours.js';

export function createV2024Resources(request: RequestFunction) {
  return {
    adjustmentTypes: V2024AdjustmentTypesResource(request),
    adjustments: V2024AdjustmentsResource(request),
    appointments: V2024AppointmentsResource(request),
    availableSlots: V2024AvailableSlotsResource(request),
    charges: V2024ChargesResource(request),
    clinicalNotes: V2024ClinicalNotesResource(request),
    feeScheduleProcedures: V2024FeeScheduleProceduresResource(request),
    feeSchedules: V2024FeeSchedulesResource(request),
    guarantorBalances: V2024GuarantorBalancesResource(request),
    insuranceBalances: V2024InsuranceBalancesResource(request),
    insuranceClaims: V2024InsuranceClaimsResource(request),
    insuranceCoverages: V2024InsuranceCoveragesResource(request),
    insurancePlans: V2024InsurancePlansResource(request),
    onboardings: V2024OnboardingsResource(request),
    operatories: V2024OperatoriesResource(request),
    patientRecalls: V2024PatientRecallsResource(request),
    patients: V2024PatientsResource(request),
    paymentTypes: V2024PaymentTypesResource(request),
    payments: V2024PaymentsResource(request),
    procedures: V2024ProceduresResource(request),
    providerSearch: V2024ProviderSearchResource(request),
    providers: V2024ProvidersResource(request),
    treatmentPlans: V2024TreatmentPlansResource(request),
    webhookSubscriptions: V2024WebhookSubscriptionsResource(request),
    workingHourLabels: V2024WorkingHourLabelsResource(request),
    workingHours: V2024WorkingHoursResource(request),
  };
}

export type V2024Resources = ReturnType<typeof createV2024Resources>;
