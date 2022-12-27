import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CalendarCustomHeaderComponent } from '../calendar-custom-header/calendar-custom-header.component';
import {
  MatDatepickerInputEvent,
  MatDatepicker,
} from '@angular/material/datepicker';

@Component({
  selector: 'bt-datepicker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements OnInit {
  @Input() value: Date | null = new Date();
  @Input() min: Date | null = null;
  @Input() max: Date | null = null;
  @Input() id = 'date';
  @Input() title = '';
  @Input() placeholder: string | undefined;
  @Input() matDatepickerFilter: any | undefined;

  @Output() changed = new EventEmitter<{ id: string; date: Date | null }>();

  header = CalendarCustomHeaderComponent;
  originalFn!: () => void;

  @ViewChild('picker', { static: true }) picker!: MatDatepicker<Date>;

  constructor() { }

  ngOnInit() {
    this.originalFn = this.picker.close;
    this.picker.close = () => {
      const doneBtn = document.getElementById(
        'date-picker-done'
      ) as HTMLButtonElement;

      if (doneBtn) {
        const isMobile = getComputedStyle(doneBtn, null).display === 'block';

        if (isMobile) {
          const isDone = doneBtn?.getAttribute('data-done');
          if (isDone === 'true') {
            doneBtn?.setAttribute('data-done', 'false');
            this.originalFn.call(this.picker);
          }
        } else {
          this.originalFn.call(this.picker);
        }
      } else {
        this.originalFn.call(this.picker);
      }
    };
  }

  dateChanged(event: MatDatepickerInputEvent<Date>) {
    this.value = event.value;
  }

  open() {
    (this.picker as any)._dateAdapter.title = this.title;
    this.picker.open();
  }

  close() {
    this.changed.emit({ id: this.id, date: this.value });
  }
}
