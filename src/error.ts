export class NexHealthAPIError extends Error {
  readonly status: number | undefined;
  readonly errors: string[];
  readonly body: unknown;

  constructor(
    message?: string,
    status?: number,
    body?: unknown,
    errors: string[] = []
  ) {
    super(message ?? 'NexHealth API error');
    this.name = 'NexHealthAPIError';
    this.status = status;
    this.errors = errors;
    this.body = body;
  }
}
