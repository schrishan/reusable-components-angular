import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LinkButtonComponent } from 'bt-components';
import { BtComponentsModule } from '../bt-components.module';
import { text, withKnobs } from '@storybook/addon-knobs';

storiesOf('Components / Button ', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .addParameters({ component: LinkButtonComponent })
  .add('Link', () => ({
    component: LinkButtonComponent,
    template: `
    <bt-link-button>{{link}}</bt-link-button>
    `,
    props: {
      state: true,
      link: text("Link text", "Link")
    }
  }));
