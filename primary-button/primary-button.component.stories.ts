import { storiesOf, moduleMetadata } from '@storybook/angular';
import { PrimaryButtonComponent, SecondaryButtonComponent } from 'bt-components';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

storiesOf('Components / Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [SecondaryButtonComponent, PrimaryButtonComponent]
    })
  )
  .add('Primary', () => ({
    component: PrimaryButtonComponent,
    template: `
    <bt-primary-button (clicked)="ok()">{{label}}</bt-primary-button>
    `,
    props: {
      ok: action('OK'),
      label: text("Label", "OK")
    }
  }))
  .add('Secondary', () => ({
    component: SecondaryButtonComponent,
    template: `
    <bt-secondary-button (clicked)="cancel()">{{label}}</bt-secondary-button>
    `,
    props: {
      cancel: action('Cancel'),
      label: text("Label", "Cancel")
    }
  }));
