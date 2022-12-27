import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LabelComponent } from 'bt-components';
import { BtComponentsModule } from '../bt-components.module';
import { text } from '@storybook/addon-knobs';

storiesOf('Components /Label ', module)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .add('Basic', () => ({
    component: LabelComponent,
    template: `
    <bt-label>{{label}}</bt-label>
    `,
    props: {
      label: text("Label", "Label")
    }
  }));
