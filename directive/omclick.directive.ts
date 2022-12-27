import { Directive, HostListener, Input } from '@angular/core';
declare var BTOnlineAnalytics: any;

@Directive({
  selector: '[omclick]',
})
export class OMClickDirective {
  @Input() omclick: any;
  constructor() { }
  @HostListener('click', ['$event'])
  SetOmniture(event: Event) {
    if (typeof BTOnlineAnalytics !== 'undefined') {
      const c: string = "'" + JSON.stringify(this.omclick) + "'";
      const d: any = JSON.parse(c.slice(1, c.length - 1));
      BTOnlineAnalytics.click(d.i, d.m, d.e, "MYACCOUNT", d.s, d.p0, d.p1);
      return true;
    }
  }
}
