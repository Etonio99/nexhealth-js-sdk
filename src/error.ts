export class NexHealthAPIError extends Error {
  readonly status: number | undefined;
  readonly errors: string[];
  readonly description: string | null;

  constructor(
    message: string = 'NexHealth API error',
    status?: number,
    errors: string[] = [],
    description: string | null = null
  ) {
    super(message);
    this.name = 'NexHealthAPIError';
    this.status = status;
    this.errors = errors;
    this.description = description;
  }
}
