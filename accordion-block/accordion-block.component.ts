import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'bt-accordion-block',
  templateUrl: './accordion-block.component.html',
  styleUrls: ['./accordion-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionBlockComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent)
  accordionItems!: QueryList<AccordionItemComponent>;

  @Input() defaultOpen: string | undefined;

  ngAfterContentInit() {
    // default expand  accordion set
    if (this.defaultOpen) {
      this.accordionItems.toArray()[
        parseInt(this.defaultOpen) - 1
      ].expand = true;
    }

    // Loop through all accordion
    this.accordionItems.toArray().forEach((item) => {
      // when header bar is clicked
      // (toggle is an @output event of accordion)
      item.openAccordionItem.subscribe(() => {
        // Open the accordion
        this.openAccordionItem(item);
      });
    });
  }

  openAccordionItem(accordionItem: AccordionItemComponent) {
    if (accordionItem.expand) {
      // close current accordion if clicked on header
      accordionItem.expand = false;
    } else {
      // close other accordions
      this.accordionItems.toArray().forEach((item) => (item.expand = false));
      // open current accordion
      accordionItem.expand = true;
    }
  }
}
