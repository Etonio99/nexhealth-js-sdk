export type WebhookEndpoint = {
  id: number;
  target_url: string;
  secret_key: string;
  active: boolean;
  created_at: string;
  updated_at: string;
};

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

export type CreateWebhookEndpointBodyParams = {
  target_url: string;
  secret_key?: string;
};

export type UpdateWebhookEndpointBodyParams = {
  target_url?: string;
  active?: boolean;
};

export type ListWebhookSubscriptionsQueryParams = {
  subdomain: string;
};

export type CreateWebhookSubscriptionBodyParams = {
  webhook_endpoint_id: number;
  institution_id: number;
  resource_type: string;
  event: string;
};
