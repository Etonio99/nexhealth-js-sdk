export type InsuranceCoverage = {
    id: number;
    subscription_relation: string;
    patient_id: number;
    priority: number;
    plan_id: number;
    subscriber_num: string | null;
    effective_date: string | null;
    expiration_date: string | null;
    plan: {
        id: number;
        payer_id: string | null;
        name: string;
        address: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        country_code: string | null;
        group_num: string;
        employer_name: string | null;
        foreign_id: string;
        updated_at: string;
        deleted_at: string | null
    };
    subscriber: {
        id: number;
        name: string;
        date_of_birth: string
    }
};