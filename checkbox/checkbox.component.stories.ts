import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from 'bt-components';
import { BtComponentsModule } from '../bt-components.module';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Components / Selection controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .add('Checkbox', () => ({
    component: CheckboxComponent,
    template: `
    <bt-checkbox [select]="select" [id]="check-id-1" label="Option 1"></bt-checkbox>
    `,
    props: {
      label: text('Label', 'Option 1'),
      select: boolean('Select', true)
    }
  }));
