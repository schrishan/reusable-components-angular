import { Component, OnInit, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BroadbandService } from 'libs/manage-broadband/src/lib/services/broadband.service';
import { ActivatedRoute, Router, PRIMARY_OUTLET } from '@angular/router';
import { OMService } from '@my-account/analytics';

@Component({
  selector: 'bt-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public isMobile: boolean = false;
  public isShowBreadCrumb: boolean = false;
  public isTablet: boolean = false;
  public isLoadComplete: boolean = false;
  public isDesktopDevice: boolean = false;
  public breadcrumbs: Breadcrumb[] = [];
  public backToText: string = 'Back to';
  public mobileLabelForBroadbandService: string = 'Product Selection';
  public omniLevel: string = 'BROADBANDSERVICE';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private broadbandService: BroadbandService,
    private deviceService: DeviceDetectorService,
    private om: OMService
  ) {
    this.detectDevice();
  }
  public detectDevice() {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
  }

  ngOnInit() {
    let breadcrumb: Breadcrumb = {
      id: 'my_account',
      label: 'My Account',
      url: '',
      baseCls: 'breadcrumb-item inactive',
    };
    this.broadbandService.currentCompleteStage.subscribe(
      (ld) => (this.isLoadComplete = ld)
    );
    this.router.events;
    this.router.events.subscribe((value) => {
      let root: ActivatedRoute = this.route.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
      this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      if (this.breadcrumbs.length > 1) this.isShowBreadCrumb = true;
      else this.isShowBreadCrumb = false;

      if (this.isMobile && this.breadcrumbs) {
        if (this.breadcrumbs.length > 1) {
          this.breadcrumbs = [this.breadcrumbs[this.breadcrumbs.length - 2]];
        }
        if (
          this.breadcrumbs.length == 1 &&
          this.breadcrumbs[0].id != 'my_account' &&
          this.breadcrumbs[0].label === 'Broadband and Wi-Fi'
        ) {
          this.breadcrumbs[0].label = this.mobileLabelForBroadbandService;
        }
      }
    });
  }

  public isclicked(breadcrumb: Breadcrumb): void {
    if (breadcrumb.url == '/manage-broadband/broadbandService') {
      this.broadbandService.updateHideStatus(false);
      this.broadbandService.setNavigatedFromProductScreen(false);
    }
    if (breadcrumb.url == '/manage-broadband/broadbandService/content-control') {
      this.broadbandService.backTOBroadbandServicePage();
    }
    this.om.Click({
      i: 125,
      m: breadcrumb.label,
      l: this.omniLevel,
    });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'title';
    //get the child routes
    let children: ActivatedRoute[] = route.children;
    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length == 0) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: Breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url,
        baseCls: 'breadcrumb-item inactive',
      };
      breadcrumbs.push(breadcrumb);

      if (breadcrumbs.length > 0) {
        for (let item of breadcrumbs) {
          item.baseCls = 'breadcrumb-item inactive';
        }
        breadcrumbs[breadcrumbs.length - 1].baseCls = 'breadcrumb-item active';
      }

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}

export interface Breadcrumb {
  label: string;
  url: string;
  baseCls: string;
  id?: string;
}
