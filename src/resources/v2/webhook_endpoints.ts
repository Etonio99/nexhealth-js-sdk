import type { NexHealthApiResponse } from '../../types/base.js';
import type { RequestFunction } from '../../types/common.js';
import type {
  CreateWebhookEndpointBodyParams,
  EditWebhookEndpointBodyParams,
  ListWebhookEndpointsQueryParams,
  WebhookEndpoint,
} from '../../types/v2/webhook_endpoints.js';

export function V2WebhookEndpointsResource(request: RequestFunction) {
  return {
    create: (bodyParams: CreateWebhookEndpointBodyParams) =>
      request<NexHealthApiResponse<WebhookEndpoint>>(
        'webhook_endpoints',
        'POST',
        bodyParams
      ),
    delete: (webhookEndpointId: number) =>
      request<null>(`webhook_endpoints/${webhookEndpointId}`, 'DELETE'),
    edit: (
      webhookEndpointId: number,
      bodyParams: EditWebhookEndpointBodyParams
    ) =>
      request<NexHealthApiResponse<WebhookEndpoint>>(
        `webhook_endpoints/${webhookEndpointId}`,
        'PATCH',
        bodyParams
      ),
    list: (queryParams: ListWebhookEndpointsQueryParams) =>
      request<NexHealthApiResponse<WebhookEndpoint[]>>(
        'webhook_endpoints',
        'GET',
        queryParams
      ),
  };
}
