import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BackToComponent } from './back-to.component';
import { BtComponentsModule } from '../bt-components.module';
import { text, withKnobs } from '@storybook/addon-knobs';

storiesOf('Components /Back to', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .addParameters({ component: BackToComponent })
  .add('Basic', () => ({
    component: BackToComponent,
    template: `
    <bt-back-to></bt-back-to>
    `,
    props: {}
  }));
