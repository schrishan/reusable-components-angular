import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SelectboxComponent } from 'bt-components';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { BtComponentsModule } from '../bt-components.module';
import { object } from '@storybook/addon-knobs';

const options = [{ "select": true, "label": "All Dates", "type": 1 }, { "select": false, "label": "Last Week", "type": 2 }];

storiesOf('Components / Selection controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BtComponentsModule
      ],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectboxComponent),
        multi: true,
      }]
    })
  )
  .addParameters({ component: SelectboxComponent })
  .add('Selectbox', () => ({
    component: SelectboxComponent,
    template: `
    <bt-selectbox [options]="options"></bt-selectbox>
    `,
    props: {
      options: object('Options', [...options])
    }
  }));
