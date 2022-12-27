import { CalendarCustomHeaderComponent } from './calendar-custom-header.component';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MatDateFormats } from '@angular/material/core';
import { ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { SpyObj, createSpyObj } from '@my-account/shared/testing';

describe('CalendarCustomHeaderComponent', () => {
  let component: CalendarCustomHeaderComponent<any>;
  let calendar: SpyObj<MatCalendar<Date>>;
  let dateAdapter: SpyObj<DateAdapter<Date>>;
  let formats: MatDateFormats;
  let cdr: SpyObj<ChangeDetectorRef>;

  beforeEach(() => {
    calendar = createSpyObj('calender', ['_userSelected']);
    dateAdapter = createSpyObj<DateAdapter<Date>>('dateAdapter', [
      'addCalendarDays',
    ]);
    formats = {} as MatDateFormats;
    cdr = createSpyObj<ChangeDetectorRef>('cdr', ['markForCheck']);
    calendar.stateChanges = new Subject() as any;
    component = new CalendarCustomHeaderComponent(
      calendar,
      dateAdapter,
      formats,
      cdr
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
