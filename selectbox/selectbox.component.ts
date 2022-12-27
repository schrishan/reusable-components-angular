import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bt-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectboxComponent),
      multi: true,
    },
  ],
})
export class SelectboxComponent implements ControlValueAccessor {
  @Input() options: any[] | null | undefined = [];
  @Input() select = 'select';
  @Input() label = 'label';
  @Input() enableSelected: boolean = false;
  @Output() clicked = new EventEmitter();

  private val: any;
  private onChange: any = () => { };
  private onTouch: any = () => { };

  @Input() set value(val: any) {
    if (val !== undefined && this.val !== val && this.options) {
      const options = this.options?.map((o) => {
        o[this.select] = false;
        return o;
      });
      val[this.select] = true;
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
      this.options = options;
    }
  }

  constructor() { }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectOption(option: any) {
    this.value = option;
    this.clicked.emit(option);
  }
}
