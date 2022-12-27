import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigFacade } from '@my-account/root-state/config/config.facade';
import { HelpSupport, HelpSupportPages } from '@my-account/shared';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'bt-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HelpSupportComponent implements OnInit {
  @Input() page: HelpSupportPages = 'dashboard';
  @Input() omniId: string = '';
  helpLinks: HelpSupport[] = [];
  private destroy$ = new Subject();

  constructor(private configFacade: ConfigFacade) { }
  ngOnInit() {
    this.configFacade.getHelpSupport$(this.page)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.helpLinks = res);
  }
  openUrl(url: any) {
    window.open(url, '_blank');
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
