export type NexHealthApiPageInfo = {
  has_previous_page: boolean;
  has_next_page: boolean;
  start_cursor: string;
  end_cursor: string;
};

export type NexHealthResponse<T> = {
  data: T;
  count?: number;
  page_info?: NexHealthApiPageInfo;
};

// Internal type used for parsing raw API responses
export type NexHealthApiResponse<T> = {
  code: boolean;
  data?: T;
  description?: string | null;
  error?: string[];
  count?: number;
  page_info?: NexHealthApiPageInfo;
};
