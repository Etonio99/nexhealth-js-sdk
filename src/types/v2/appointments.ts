export type AppointmentPatientBio = {
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
    cell_phone_number?: string;
    home_phone_number?: string;
    work_phone_number?: string;
};

export type AppointmentUser = {
    id: number;
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    name: string;
    created_at: string;
    updated_at: string;
    institution_id: number;
    foreign_id: string | null;
    foreign_id_type: string | null;
    bio: AppointmentPatientBio;
    inactive: boolean;
    last_sync_time: string | null;
};

export type AppointmentPatient = {
    id: number;
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    name: string;
    created_at: string;
    updated_at: string;
    institution_id: number;
    foreign_id: string | null;
    foreign_id_type: string | null;
    bio: AppointmentPatientBio;
    inactive: boolean;
    last_sync_time: string | null;
    guarantor_id: number | null;
    unsubscribe_sms: boolean;
    billing_type: string | null;
    chart_id: string | null;
    preferred_language: string | null;
    preferred_locale: string | null;
    location_ids: number[];
    guarantor?: AppointmentUser;
};

export type AppointmentOperatory = {
    id: number;
    name: string;
    foreign_id: string | null;
    foreign_id_type: string | null;
    location_id: number;
    last_sync_time: string | null;
    created_at: string;
    updated_at: string;
    display_name?: string;
    profile_url?: string;
    active: boolean;
    bookable_online: boolean;
};

export type AppointmentTypeBasic = {
    id: number;
    name: string;
    parent_type: string;
    parent_id: number;
    minutes: number;
    bookable_online: boolean;
};

export type AppointmentProcedure = {
    id: number;
    location_id: number;
    patient_id: number;
    provider_id: number;
    appointment_id: number;
    code: string;
    name: string;
    status: string;
    updated_at: string;
    body_site: unknown;
    fee: { amount: string; currency: string };
    start_date: string;
    end_date: string;
};

export type AppointmentEmrDescriptor = {
    id: number;
    descriptor_type: string;
    name: string;
    code: string;
    location_id: number;
    foreign_id: string | null;
    foreign_id_type: string | null;
    data: unknown;
    active: boolean;
    last_sync_time: string | null;
    created_at: string;
    updated_at: string;
};

export type AppointmentOnlineBookingDetail = {
    booked_via_nexhealth_generated_link: boolean;
    campaign_type?: "cancelled_recall" | "continuing_care_recall" | "manual" | "missed_recall" | "recall" | "google_booking";
    campaign_id?: string;
    campaign_medium?: "email" | "sms";
    booked_via_one_click: boolean;
};

export type Appointment = {
    id: number;
    patient_id: number;
    provider_id: number;
    provider_name: string;
    start_time: string;
    confirmed: boolean;
    patient_missed: boolean;
    created_at: string;
    updated_at: string;
    note: string;
    end_time: string;
    unavailable: boolean;
    cancelled: boolean;
    timezone: string;
    institution_id: number;
    appointment_type_id: number;
    checkin_at?: string;
    location_id: number;
    foreign_id: string | null;
    foreign_id_type: string | null;
    misc: unknown;
    last_sync_time: string;
    patient_confirmed: number;
    created_by_user_id: number;
    is_guardian: boolean;
    patient_confirmed_at?: string;
    cancelled_at?: string;
    is_new_clients_patient: boolean;
    confirmed_at?: string;
    sooner_if_possible?: boolean;
    operatory_id: number;
    checked_out: boolean;
    checked_out_at?: string;
    referrer?: string;
    is_past_patient: boolean;
    timezone_offset: string;
    patient?: AppointmentPatient;
    operatory?: AppointmentOperatory;
    appointment_type?: AppointmentTypeBasic;
    procedures?: AppointmentProcedure[];
    descriptors?: AppointmentEmrDescriptor[];
    booking_details?: AppointmentOnlineBookingDetail;
};

export type AppointmentWithoutIncludes = {
    id: number;
    patient_id: number;
    provider_id: number;
    provider_name: string;
    start_time: string;
    confirmed: boolean;
    patient_missed: boolean;
    created_at: string;
    updated_at: string;
    note: string;
    end_time: string;
    unavailable: boolean;
    cancelled: boolean;
    timezone: string;
    institution_id: number;
    appointment_type_id: number;
    checkin_at?: string;
    location_id: number;
    foreign_id: string | null;
    foreign_id_type: string | null;
    misc: unknown;
    last_sync_time: string;
    patient_confirmed: number;
    created_by_user_id: number;
    is_guardian: boolean;
    patient_confirmed_at?: string;
    cancelled_at?: string;
    is_new_clients_patient: boolean;
    confirmed_at?: string;
    sooner_if_possible?: boolean;
    operatory_id: number;
    checked_out: boolean;
    checked_out_at?: string;
    referrer?: string;
    is_past_patient: boolean;
    timezone_offset: string;
};

export type AppointmentResponse = {
    appt: AppointmentWithoutIncludes;
    stripe_client_secret?: string;
};

export type ListAppointmentsParams = {
    subdomain: string;
    start_time?: string;
    end_time?: string;
    patient_id?: number;
    provider_id?: number;
    location_id?: number;
    page?: number;
    per_page?: number;
};

export type GetAppointmentParams = {
    subdomain: string;
};

export type CreateAppointmentBodyPatientBio = {
    date_of_birth: string;
    gender?: "Male" | "Female" | "Other";
};

export type CreateAppointmentBodyPatient = {
    first_name: string;
    last_name: string;
    bio: CreateAppointmentBodyPatientBio;
};

export type CreateAppointmentBodyAppt = {
    patient_id: number;
    provider_id: number;
    start_time: string;
    operatory_id?: number;
    end_time?: string;
    appointment_type_id?: number;
    note?: string;
    unavailable?: boolean;
    is_guardian?: boolean;
    is_new_clients_patient?: boolean;
    referrer?: string;
    patient?: CreateAppointmentBodyPatient;
    descriptor_ids?: number[];
};

export type CreateAppointmentBody = {
    appt: CreateAppointmentBodyAppt;
};

export type UpdateAppointmentBodyAppt = {
    confirmed?: boolean;
    cancelled?: boolean;
};

export type UpdateAppointmentBody = {
    appt: UpdateAppointmentBodyAppt;
};
