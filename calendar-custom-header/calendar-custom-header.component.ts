import {
  Component,
  OnDestroy,
  Inject,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { MatCalendar, MatDatepicker } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'bt-calendar-custom-header',
  templateUrl: './calendar-custom-header.component.html',
  styleUrls: ['./calendar-custom-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarCustomHeaderComponent<D> implements OnDestroy {
  private destroyed$ = new Subject<void>();

  constructor(
    private datePicker: MatDatepicker<D>,
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  get periodLabel() {
    return this.dateAdapter.format(
      this.calendar.activeDate,
      this.dateFormats.display.monthYearLabel
    );
  }

  get title() {
    return (this.dateAdapter as any).title || '';
  }

  previousClicked(mode: 'month' | 'year') {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
  }

  done() {
    const doneBtn = document.getElementById('date-picker-done');
    doneBtn?.setAttribute('data-done', 'true');
    this.datePicker.close();
  }
}
