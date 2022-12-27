import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AccordionComponent } from 'bt-components';
import { CommonModule } from '@angular/common';
import { text } from '@storybook/addon-knobs';

storiesOf('Components / Accordion', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [AccordionComponent]
    })
  )
  .add('Basic', () => ({
    component: AccordionComponent,
    template: `
    <bt-accordion [id]="'accordion'" [divider]="false" [heading]="heading">
    {{content}}
    </bt-accordion>
    `,
    props: {
      heading: text('Heading', 'Accordion'),
      content: text('Content', 'Content is'),
    }
  }));
