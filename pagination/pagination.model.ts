export interface Pagination {
  currentPage: number;
  perPageCount: number;
  pageCount: number;
  totalRecordsCount: number;
}

export interface PaginationState {
  currentPage: number;
  totalRecordsCount: number;
  perPageCount: number;
  pageCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  pages: number[];
  visiblePages: number[];
  start: number;
  end: number;
}
