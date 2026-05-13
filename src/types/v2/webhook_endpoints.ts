export type WebhookEndpoint = {
  id: number;
  target_url: string;
  secret_key: string;
  active: boolean;
  created_at: string;
  updated_at: string;
};

// PARAMS

export type ListWebhookEndpointsQueryParams = {
  active?: boolean;
};

export type CreateWebhookEndpointBodyParams = {
  target_url: string;
  secret_key?: string;
};

export type UpdateWebhookEndpointBodyParams = {
  target_url?: string;
  active?: boolean;
};
