import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'bt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent {
  constructor() {}

  @Input() tabList: any;
  @Input() activeTab: string | undefined;
  @Output() currentSelectedTab = new EventEmitter<string>();
  selectedTab: string | undefined;

  selectTab(selectedTab: string) {
    this.currentSelectedTab.emit(selectedTab);
    this.activeTab = selectedTab;
  }
}
