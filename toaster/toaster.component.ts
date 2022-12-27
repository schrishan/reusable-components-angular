import { Component, OnInit, Input } from '@angular/core';
import { ToasterItem } from './toaster.model';

@Component({
  selector: 'bt-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  @Input() toasterDetails!: ToasterItem;
  constructor() { }

  ngOnInit() {
  }

  public getIcon(toasterDetails: any) {
    switch (toasterDetails.type) {
      case 'success':
        return 'mb-white-tick';
      case 'error':
        return 'mb-warning-white';
      case 'warning':
        return 'mb-info';
      default:
        return '';
    }
  }
  close(toasterDetails: ToasterItem ) {
    toasterDetails.text = "";
  }
}
