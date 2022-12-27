import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bt-table-block',
  templateUrl: './table-block.component.html',
  styleUrls: ['./table-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableBlockComponent {
  @Input() tableData: any;
  @Input() columnList: any;
}
