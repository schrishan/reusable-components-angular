import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { transition, trigger, style, animate, state } from '@angular/animations';

@Component({
  selector: '<accordion>',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide-in-out', [
      state(
        'slide-in',
        style({
          height: '*',
        })
      ),
      state(
        'slide-out',
        style({
          height: '0',
        })
      ),
      transition(
        'slide-in => slide-out',
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)')
      ),
      transition(
        'slide-out => slide-in',
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AccordionItemComponent {
  @Input() expand = false;

  @Input() disable = false;

  @Output() openAccordionItem: EventEmitter<any> = new EventEmitter<any>();
}
