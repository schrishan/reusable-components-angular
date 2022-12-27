import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bt-pg-title',
  templateUrl: './pg-title.component.html',
  styleUrls: ['./pg-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PgTitleComponent {

  @Input() pageTitle: string = '';
  @Input() pageDescription: string = '';

  constructor() { }
}
