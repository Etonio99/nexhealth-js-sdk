export type NexHealthApiResponse<T> = {
    code: boolean;
    data?: T;
    description?: string;
    error?: string[];
    count?: number;
    page_info?: NexHealthApiPageInfo;
}

export type NexHealthApiPageInfo = {
    has_previous_page: boolean;
    has_next_page: boolean;
    start_cursor: string;
    end_cursor: string;
}
