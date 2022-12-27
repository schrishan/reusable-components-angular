import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() headers: string[] | null = [];
  @Input() rows: string[][] | null = [[]];

  constructor() {}
}
