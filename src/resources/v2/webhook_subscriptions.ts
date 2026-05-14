import type { NexHealthResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreateWebhookSubscriptionBodyParams,
  ListWebhookSubscriptionsQueryParams,
  UpdateWebhookSubscriptionBodyParams,
  WebhookSubscription,
} from '../../types/v2/webhook_subscriptions.js';

export function V2WebhookSubscriptionsResource(request: RequestFunction) {
  return {
    create: (
      webhookEndpointId: number,
      bodyParams: CreateWebhookSubscriptionBodyParams
    ) =>
      request<NexHealthResponse<WebhookSubscription>>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions`,
        'POST',
        undefined,
        bodyParams
      ),
    delete: (webhookEndpointId: number, webhookSubscriptionId: number) =>
      request<null>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions/${webhookSubscriptionId}`,
        'DELETE'
      ),
    update: (
      webhookEndpointId: number,
      webhookSubscriptionId: number,
      bodyParams: UpdateWebhookSubscriptionBodyParams
    ) =>
      request<NexHealthResponse<WebhookSubscription>>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions/${webhookSubscriptionId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
    list: (
      webhookEndpointId: number,
      queryParams?: ListWebhookSubscriptionsQueryParams
    ) =>
      request<NexHealthResponse<WebhookSubscription[]>>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions`,
        'GET',
        queryParams
      ),
  };
}
