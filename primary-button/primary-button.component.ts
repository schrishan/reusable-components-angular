import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'bt-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent {
  @Output() clicked = new EventEmitter();
  @Input() disabled = false;

  constructor() { }
}
