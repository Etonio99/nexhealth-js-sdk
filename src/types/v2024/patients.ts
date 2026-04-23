export type Patient = {
    id: number;
    email: string | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    name: string;
    created_at: string;
    updated_at: string;
    institution_id: number;
    foreign_id: string | null;
    foreign_id_type: string | null;
    bio: Bio;
    inactive: boolean;
    last_sync_time: string | null;
    guarantor_id: string | null;
    unsubscribe_sms?: string | null;
    billing_type: string | null;
    chart_id: string | null;
    preferred_language: string | null;
    provider_id: number | null;
    hipaa: Hipaa | null;
};

export type Bio = {
    city?: string;
    state?: string;
    gender?: string;
    zip_code?: string | null;
    new_patient?: boolean;
    non_patient?: boolean;
    phone_number?: string;
    date_of_birth?: string | null;
    address_line_1?: string;
    address_line_2?: string;
    street_address?: string;
    expired_numbers?: string[];
    verified_mobile?: string | null;
    cell_phone_number?: string;
    home_phone_number?: string;
    patient_requested?: boolean;
    work_phone_number?: string;
    previous_foreign_id?: string | null;
    custom_contact_number?: string | null;
};

export type Hipaa = {
    authorization: boolean;
    authorization_date: string | null;
    privacy: boolean;
    privacy_date: string | null;
    consent: boolean;
    consent_date: string | null;
};

// Params

export type GetPatientQueryParams = {
    subdomain: string;
    // TODO: Add "Include"
};

type BaseListPatientQueryParams = {
    subdomain: string;
    location_id: string;
    sort?: "id" | "-id" | "updated_at" | "-updated_at";
    name?: string;
    email?: string;
    phone_number?: string;
    date_of_birth?: string;
    inactive?: boolean;
    foreign_id?: string;
    updated_since?: string;
    new_patient?: boolean;
    non_patient?: boolean;
    forms_syncable?: boolean;
    location_strict?: boolean;
    // TODO: Add "Include"
}

export type ListPatientsQueryParams = BaseListPatientQueryParams & {
    start_cursor?: string;
    end_cursor?: string;
    per_page: number;
};

export type ListAllPatientsQueryParams = BaseListPatientQueryParams;

export type CreatePatientQueryParams = {
    subdomain: string;
    location_id: number;
};

export type CreatePatientBodyParams = {
    provider: {
        provider_id: number;
    };
    patient: {
        first_name: string;
        last_name: string;
        email: string;
        bio: BioBodyParams;
    }
    return_existing_if_match?: boolean;
};

export type BioBodyParams = {
    date_of_birth: string;
    phone_number: string;
    home_phone_number?: string;
    cell_phone_number?: string;
    work_phone_number?: string;
    custom_contact_number?: string;
    gender?: "Male" | "Female" | "Other";
    weight?: number;
    height?: number;
    street_address?: string;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    insurance_name?: string;
    ssn?: string;
    race?: string;
};
