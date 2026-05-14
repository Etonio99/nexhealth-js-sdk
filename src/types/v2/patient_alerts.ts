export type PatientAlert = {
  id: number;
  patient_id: number;
  note: string | null;
  disabled_at: string | null;
  created_at: string;
  updated_at: string;
};

// PARAMS


export type CreatePatientAlertBodyParams = {
  patient_alert: {
    note: string;
  };
};


export type UpdatePatientAlertBodyParams = {
  patient_alert: {
    disabled?: boolean;
  };
};

export type ListPatientAlertsQueryParams = {
  include_disabled?: boolean;
};
