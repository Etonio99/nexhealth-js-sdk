export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type RequestFunction = <T>(
    endpoint: string,
    method?: Method,
    queryParams?: Record<string, unknown>,
    data?: unknown,
) => Promise<T>;
