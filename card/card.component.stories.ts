import { storiesOf, moduleMetadata } from '@storybook/angular';
import {
  CardComponent,
  CardBodyComponent,
  CardDividerComponent,
  CardHeaderComponent,
  CardType
} from 'bt-components';
import { CommonModule } from '@angular/common';
import { text, select } from '@storybook/addon-knobs';

const icons = {
  bill: 'ma-bill',
  Order: 'ma-delivery',
  Fault: 'ma-fault',
  Users: 'ma-users',
  Messages: 'ma-messages'
};
const types = {
  Default: CardType.DEFAULT,
  Primary: CardType.PRIMARY,
  Info: CardType.INFO,
  Warning: CardType.WARNING,
  Unknown: CardType.UNKNOWN,
  Error: CardType.ERROR,
  Horizontal: CardType.HORIZONTAL,
  Connected: CardType.CONNECTED,
  Notification: CardType.NOTIFICATION,
  Ready: CardType.READY,
};

storiesOf('Components /Card', module)
  .addDecorator(moduleMetadata({
    imports: [CommonModule],
    declarations: [
      CardComponent,
      CardBodyComponent,
      CardDividerComponent,
      CardHeaderComponent
    ]
  }))
  .add('Card samples', () => ({
    component: CardComponent,
    template: `
      <bt-card [type]="type">
      <bt-card-header [icon]="'ma '+icon" [heading]="heading"></bt-card-header>
      <bt-card-divider></bt-card-divider>
      <bt-card-body>{{body}}</bt-card-body>
      </bt-card>
    `,
    props: {
      type: select('Type', types, CardType.DEFAULT),
      heading: text('Heading', 'Sample Heading'),
      icon: select('Icon', icons, 'ma-delivery'),
      body: text('Body', 'Sample Body'),
    }
  }));
