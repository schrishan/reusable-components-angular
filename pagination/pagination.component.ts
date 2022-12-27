import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { Pagination, PaginationState } from './pagination.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'bt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input() set config(val: Pagination | null) {
    if (val && !this.isEqual(val, this._config)) {
      this._config = val;
      this.init();
    }
  }

  _config: Pagination = {
    currentPage: 1,
    perPageCount: 0,
    pageCount: 0,
    totalRecordsCount: 0,
  };

  @Output() pageSelected = new EventEmitter<PaginationState>();
  @Output() paginationUpdated = new EventEmitter<PaginationState>();

  start = 0;
  end = 0;
  isFirstPage = false;
  isLastPage = false;
  pages: number[] = [];
  visiblePages: number[] = [];
  currentPage = 1;

  constructor(
    private cdr: ChangeDetectorRef,
    private scroll: ViewportScroller
  ) {}

  ngOnInit() {
    this.init();
  }

  isEqual(a: Pagination, b: Pagination) {
    return (
      a.currentPage === b.currentPage &&
      a.pageCount === b.pageCount &&
      a.perPageCount === b.perPageCount &&
      a.totalRecordsCount === b.totalRecordsCount
    );
  }

  private init() {
    this.currentPage = this._config.currentPage;
    Object.assign(this, this.getPagination());

    this.selectPage(this.currentPage, false);
  }

  selectPage(page: number, shouldEmit = true) {
    this.currentPage = page;
    const pagination = this.getFullPagination();
    Object.assign(this, pagination);
    this._config = {
      ...this._config,
      currentPage: this.currentPage,
    };
    if (shouldEmit) {
      this.pageSelected.emit({
        ...this._config,
        ...pagination,
      } as PaginationState);
    } else {
      this.paginationUpdated.emit({
        ...this._config,
        ...pagination,
      } as PaginationState);
    }
    this.cdr.markForCheck();
    this.scrollToTop();
  }

  private getFullPagination() {
    const { totalRecordsCount, perPageCount, pageCount } = this._config;
    const currentPage = this.currentPage;
    return {
      currentPage,
      isFirstPage: currentPage === 1,
      isLastPage: this.pages[this.pages.length - 1] === currentPage,
      start:
        currentPage === 1
          ? 1
          : totalRecordsCount === 0
          ? 0
          : perPageCount * (currentPage - 1) + 1,
      end:
        totalRecordsCount >= perPageCount
          ? perPageCount * currentPage <= totalRecordsCount
            ? perPageCount * currentPage
            : totalRecordsCount
          : totalRecordsCount,
      pages: this.pages,
      visiblePages: this.getVisiblePages(
        { pageCount, pages: this.pages },
        currentPage
      ),
    };
  }

  private getPagination() {
    const { totalRecordsCount, perPageCount, pageCount } = this._config;
    const currentPage = this.currentPage;
    const pages = Array(
      totalRecordsCount % perPageCount === 0
        ? Math.floor(totalRecordsCount / perPageCount)
        : Math.floor(totalRecordsCount / perPageCount) + 1
    )
      .fill(0)
      .map((_, i) => i + 1);
    const threshold = Math.floor(pageCount / 2);
    const visiblePages = pages.slice(
      currentPage - threshold < 0 ? 0 : currentPage - threshold,
      currentPage - threshold < 0 ? pageCount : currentPage + threshold
    );
    return {
      totalRecordsCount: totalRecordsCount,
      currentPage,
      isFirstPage: true,
      isLastPage: pages[pages.length - 1] === 1,
      pages,
      visiblePages,
      start: totalRecordsCount === 0 ? 0 : 1,
      end: totalRecordsCount >= perPageCount ? perPageCount : totalRecordsCount,
    };
  }

  private getVisiblePages(
    { pageCount, pages }: { pageCount: number; pages: number[] },
    currentPage: number
  ) {
    const threshold = Math.floor((pageCount + 1) / 2);
    const visiblePages = pages.slice(
      currentPage - threshold <= 0
        ? 0
        : currentPage + threshold > pages.length
        ? pages.length - pageCount
        : currentPage - threshold,
      currentPage - threshold <= 0 ? pageCount : currentPage + threshold - 1
    );
    return visiblePages;
  }

  scrollToTop() {
    // this.scroll.scrollToPosition([0, 0]);

    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
