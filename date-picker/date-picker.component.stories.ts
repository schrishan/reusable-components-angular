import { storiesOf, moduleMetadata } from '@storybook/angular';
import {
  DatePickerComponent,
  BtComponentsModule,
  CalendarCustomHeaderComponent
} from 'bt-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Components /Date Picker', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        BtComponentsModule
      ],
      entryComponents: [CalendarCustomHeaderComponent]
    })
  )
  .addParameters({ component: DatePickerComponent })
  .add('Basic', () => ({
    component: DatePickerComponent,
    template: `
    <label for="startDateId">Date
    <bt-datepicker [title]="'Date Picker'" [value]="startDate" (changed)="dateChanged($event)" [id]="startDateId"></bt-datepicker>
    </label>
    `,
    props: {
      startDate: new Date(),
      startDateId: 'start-date',
    }
  }));
