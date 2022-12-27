import { storiesOf } from '@storybook/angular';
import { TableComponent } from 'bt-components';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

storiesOf('Components /Table', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [TableComponent]
    })
  )
  .addParameters({ component: TableComponent })
  .add('Basic', () => ({
    component: TableComponent,
    template: `
    <bt-table [headers]="headers" [rows]="rows | async"></bt-table>
    `,
    props: {
      headers: ['Id', 'Name'],
      rows: of([
        ['1', 'App'],
        ['2', 'Components'],
      ])
    }
  }));
