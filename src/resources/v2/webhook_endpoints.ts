import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreateWebhookEndpointBodyParams,
  UpdateWebhookEndpointBodyParams,
  ListWebhookEndpointsQueryParams,
  WebhookEndpoint,
} from '../../types/v2/webhook_endpoints.js';

export function V2WebhookEndpointsResource(request: RequestFunction) {
  return {
    create: (bodyParams: CreateWebhookEndpointBodyParams) =>
      request<NexHealthApiResponse<WebhookEndpoint>>(
        'webhook_endpoints',
        'POST',
        undefined,
        bodyParams
      ),
    delete: (webhookEndpointId: number) =>
      request<null>(`webhook_endpoints/${webhookEndpointId}`, 'DELETE'),
    update: (
      webhookEndpointId: number,
      bodyParams: UpdateWebhookEndpointBodyParams
    ) =>
      request<NexHealthApiResponse<WebhookEndpoint>>(
        `webhook_endpoints/${webhookEndpointId}`,
        'PATCH',
        undefined,
        bodyParams
      ),
    list: (queryParams?: ListWebhookEndpointsQueryParams) =>
      request<NexHealthApiResponse<WebhookEndpoint[]>>(
        'webhook_endpoints',
        'GET',
        queryParams
      ),
  };
}
