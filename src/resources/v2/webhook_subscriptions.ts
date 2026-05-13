import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreateWebhookSubscriptionBodyParams,
  CreateWebhookSubscriptionQueryParams,
  ListWebhookSubscriptionsQueryParams,
  UpdateWebhookSubscriptionBodyParams,
  WebhookSubscription,
} from '../../types/v2/webhook_subscriptions.js';

export function V2WebhookSubscriptionsResource(request: RequestFunction) {
  return {
    create: (
      webhookEndpointId: number,
      queryParams: CreateWebhookSubscriptionQueryParams,
      bodyParams: CreateWebhookSubscriptionBodyParams
    ) =>
      request<NexHealthApiResponse<WebhookSubscription>>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions`,
        'POST',
        queryParams,
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
      request<NexHealthApiResponse<WebhookSubscription>>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions/${webhookSubscriptionId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
    list: (
      webhookEndpointId: number,
      queryParams: ListWebhookSubscriptionsQueryParams
    ) =>
      request<NexHealthApiResponse<WebhookSubscription[]>>(
        `webhook_endpoints/${webhookEndpointId}/webhook_subscriptions`,
        'GET',
        queryParams
      ),
  };
}
