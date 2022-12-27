import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BtComponentsModule } from '../bt-components.module';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Components / Selection controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .add('Switch', () => ({
    template: `
    <bt-switch-button [(on)]="state"></bt-switch-button>
    `,
    props: {
      state: boolean('On', true)
    }
  }));
