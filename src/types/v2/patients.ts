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

// Params

export type GetPatientQueryParams = {
    subdomain: string;
};

type BaseListPatientQueryParams = {
    subdomain: string;
    location_id: string;
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
    sort?: "name" | "-name" | "created_at" | "-created_at";
    appointment_date_start?: string;
    appointment_date_end?: string;
};

export type ListPatientsQueryParams = BaseListPatientQueryParams & {
    page: number;
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