import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'bt-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  @Input() name = '';
  @Input() label = '';
  @Input() value = '';
  @Input() select = false;
  @Output() clicked = new EventEmitter<{ select: boolean; name: string ; value: string , label: string }>();

  constructor() {}
}
