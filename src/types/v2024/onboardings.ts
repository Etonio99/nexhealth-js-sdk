import type { CursorPaginationParams } from './common.js';

export type Onboarding = {
  id: string;
  created_at: string;
  subdomain: string | null;
  url: string;
  url_expires_at: string;
  status: OnboardingStatus;
  booking_params: Record<string, unknown>;
};

export type OnboardingStatus = 'in_progress' | 'complete' | 'failed';

// PARAMS

type BaseListOnboardingsQueryParams = {
  subdomain?: string;
  status?: OnboardingStatus;
  sort?: 'created_at' | '-created_at' | 'status' | '-status' | 'subdomain' | '-subdomain';
};

export type ListOnboardingsQueryParams = BaseListOnboardingsQueryParams & CursorPaginationParams;

export type ListAllOnboardingsQueryParams = BaseListOnboardingsQueryParams;

export type CreateOnboardingBodyParams = {
  onboarding: {
    institution_name?: string;
    institution_zip_code?: string;
    institution_website?: string;
    institution_email?: string;
    subdomain?: string;
    emr_name?: string;
  };
};
