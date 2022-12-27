import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bt-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() id = '';
  @Input() heading = '';
  @Input() divider = true;
  constructor() {}
}
