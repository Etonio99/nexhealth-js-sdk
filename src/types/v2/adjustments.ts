export type Adjustment = {
    id: number;
    foreign_id: string
    location_id: number;
    patient_id: number;
    guarantor_id: number | null;
    provider_id: number | null;
    updated_at: string
    description: string | null
    deleted_at: string | null;
    adjustment_amount: {
        amount: string
        currency: string | null
    };
    adjusted_at: string
    transaction_id: string | null;
    charge_id: number | null;
    claim_id: number | null;
    adjustment_type_id: number | null;
    value: {
        amount: string
        currency: string
    };
};