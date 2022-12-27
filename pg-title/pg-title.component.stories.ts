import { storiesOf, moduleMetadata } from '@storybook/angular';
import { PgTitleComponent } from './pg-title.component';
import { BtComponentsModule } from '../bt-components.module';
import { text, withKnobs } from '@storybook/addon-knobs';

storiesOf('Components /Page title', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .addParameters({ component: PgTitleComponent })
  .add('Basic', () => ({
    component: PgTitleComponent,
    template: `
    <bt-pg-title pageTitle="{{pageTitle}}" pageDescription="{{pageDescription}}"></bt-pg-title>
    `,
    props: {
      pageTitle: text("Title", "Page title"),
      pageDescription: text("Desc", "Page desc is something we can change.")

    }
  }));
