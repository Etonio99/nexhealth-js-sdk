export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type RequestFunction = <T>(endpoint: string, method: Method, data?: unknown) => Promise<T>;
