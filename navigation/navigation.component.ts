import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  Output,
  ViewEncapsulation,
  HostListener,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { NavigationItem } from './navigation-item.model';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'bt-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() items: NavigationItem[] | null = [];
  @Input() fixedHeight = 120;

  @Output() clicked = new EventEmitter<NavigationItem>();
  private ngDestroy$ = new Subject();
  showMobile = false;
  activeItemTitle = '';
  omniId = 109;

  @HostListener('click', ['$event'])
  hideMenu(event: MouseEvent) {
    this.router.events.pipe(takeUntil(this.ngDestroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case "/":
            this.omniId = 109;
            break;
          case "/messages":
            this.omniId = 103;
            break;
          case "/services":
            this.omniId = 128;
            break;
          case "/order-tracker":
            this.omniId = 110;
            break;
        }
      }
    })
    if (this.showMobile) {
      this.toggleMenu(event);
    }
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.showMobile = !this.showMobile;
    this.fixBodyToggle();
  }
  fixBodyToggle() {
    document.querySelector('body')?.classList.toggle('fix-body');
  }

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.ngDestroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = event.url;
        const item = this.items?.find(i => i.url === url || (url.startsWith(i.url) && i.url != '/'));
        this.activeItemTitle = item?.title || 'My Account';
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
