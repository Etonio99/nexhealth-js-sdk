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

export type GetPatientParams = {
    subdomain: string;
};

export type CreatePatientBody = {
    subdomain: string;
    first_name: string;
    last_name: string;
    email?: string;
    date_of_birth?: string;
};
