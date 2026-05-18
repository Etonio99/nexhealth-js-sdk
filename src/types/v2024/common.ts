export type Price = {
  amount: string;
  currency: string;
};

export type CursorPaginationParams = {
  start_cursor?: string;
  end_cursor?: string;
  per_page: number;
};
