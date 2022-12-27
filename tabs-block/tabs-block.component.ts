import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
} from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'bt-tabs-block',
  templateUrl: './tabs-block.component.html',
  styleUrls: ['./tabs-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsBlockComponent implements AfterContentInit {
  toggleOn: boolean = false;
  @Output() selectedTab = new EventEmitter<string>();
  @ContentChildren(TabItemComponent)
  tabs!: QueryList<TabItemComponent>;
  @Input() activeTab: string = '';

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes?.activeTab?.currentValue == 'mp') {
      this.tabs.toArray().forEach((tab) => {
        tab.active = tab.title == 'BT Business Apps' ? true : false;
      }
      );
    }
  }

  selectTab(tab: TabItemComponent) {
    this.tabs.toArray().forEach((tab) => tab.active = false);
    tab.active = true;
    this.toggleOn = false;
    this.selectedTab.emit(tab.title);
  }

  openDropdown() {
    this.toggleOn = !this.toggleOn;
  }
}
