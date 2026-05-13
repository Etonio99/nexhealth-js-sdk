export type WebhookSubscription = {
  id: number;
  webhook_endpoint_id: number;
  institution_id: number;
  resource_type: string;
  event: string;
  active: boolean;
  created_at: string;
  updated_at: string;
};

// PARAMS

export type ListWebhookSubscriptionsQueryParams = {
  subdomain: string;
};

export type CreateWebhookSubscriptionBodyParams = {
  webhook_endpoint_id: number;
  institution_id: number;
  resource_type: string;
  event: string;
};
