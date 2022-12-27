import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ModalComponent } from 'bt-components';
import { BtComponentsModule } from '../bt-components.module';
import { text } from '@storybook/addon-knobs';

storiesOf('Components /Modal', module)
  .addDecorator(
    moduleMetadata({
      imports: [BtComponentsModule],
    })
  )
  .add('Basic', () => ({
    component: ModalComponent,
    template: `
    <bt-modal header="Price table" >
      <bt-modal-header>{{header}}</bt-modal-header>
      <bt-modal-body>{{body}}</bt-modal-body>
    </bt-modal>
    `,
    props: {
      header: text('Header', 'Modal'),
      body: text('Body', 'Modal Body')
    }
  }));
