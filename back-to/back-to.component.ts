import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bt-back-to',
  templateUrl: './back-to.component.html',
  styleUrls: ['./back-to.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BackToComponent {
  @Output() clicked = new EventEmitter();
}
