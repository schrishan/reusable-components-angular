import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'bt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  @Input() id = '';
  @Input() label = '';
  @Input() select = false;
  @Output() clicked = new EventEmitter<{ select: boolean; id: string }>();

  constructor() {}
}
