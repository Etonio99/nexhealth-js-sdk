export class NexHealthAPIError extends Error {
  readonly status: number | undefined;
  readonly body: unknown;

  constructor(message?: string, status?: number, body?: unknown) {
    super(message ?? 'NexHealth API error');
    this.name = 'NexHealthAPIError';
    this.status = status;
    this.body = body;
  }
}
