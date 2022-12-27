import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { ToolTipService } from './tooltip.services';

@Component({
  selector: 'bt-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolTipComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() disabledPosition!: boolean;
  private element: any;

  constructor(private toolTipService: ToolTipService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('toolTip must have an id');
      return;
    }

    // close toolTip on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'tooltip-wrp') {
        this.close();
      }
    });

    // add self (this toolTip instance) to the toolTip service so it's accessible from controllers
    this.toolTipService.add(this);
  }

  // remove self from toolTip service when component is destroyed
  ngOnDestroy(): void {
    this.toolTipService.remove(this.id);
    this.element.remove();
  }

  // open toolTip
  open(): void {
    this.element.querySelector('.tooltip-holder').classList.add('show');
    document.body.classList.add('tooltip-open');
  }

  // close toolTip
  close(): void {
    this.element.querySelector('.tooltip-holder').classList.remove('show');
    document.body.classList.remove('tooltip-open');
  }
}
