import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabItemComponent {
  @Input('tabTitle')
  title!: any;
  @Input() active = false;
  @Input() customClass = '';
}
