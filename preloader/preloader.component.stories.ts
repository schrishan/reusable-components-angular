import { storiesOf, moduleMetadata } from '@storybook/angular';
import { PreloaderComponent } from 'bt-components';
import { BtComponentsModule } from '../bt-components.module';

storiesOf('Components /Pre-loader ', module)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .addParameters({ component: PreloaderComponent })
  .add('Basic', () => ({
    component: PreloaderComponent,
    template: `
    <bt-preloader></bt-preloader>
    `,
    props: {
    }
  }));
