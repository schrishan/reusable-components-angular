import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'bt-removable-buttons-list',
  templateUrl: './removable-buttons-list.component.html',
  styleUrls: ['./removable-buttons-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(200)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(400, style({ opacity: 0 }))),
    ]),
  ],
})
export class RemovableButtonsListComponent {
  @Input() buttonsList: any;
  @Output() updateList: EventEmitter<any> = new EventEmitter<any>();

  removeItem(index: number) {
    this.buttonsList.splice(index, 1);
    this.updateList.emit(this.buttonsList);
  }
}
