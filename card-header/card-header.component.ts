import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bt-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent {

  @Input() heading = '';
  @Input() icon = '';
  @Output() clicked = new EventEmitter();
  constructor() { }


}
