export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type RequestFunction = <T>(
  endpoint: string,
  method?: Method,
  queryParams?: Record<string, unknown>,
  bodyParams?: unknown
) => Promise<T>;

export type Weekday =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
