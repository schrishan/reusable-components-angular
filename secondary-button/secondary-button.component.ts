import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'bt-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryButtonComponent {
  @Output() clicked = new EventEmitter();
  @Input() disabled = false;

  constructor() {}
}
