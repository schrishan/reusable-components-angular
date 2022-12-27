import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NavigationComponent } from 'bt-components';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { I18nFakeModule } from '@storybook-config/i18n-fake.module';
import { RouterModule } from '@angular/router';
import { OMClickDirective } from './../../../../analytics/src/lib/directive/omclick.directive';
import { object } from '@storybook/addon-knobs';

const items = [
  {
    "title": "My Account",
    "active": true,
    "url": "/",
    "routerLink": true,
    "icon": "home"
  },
  {
    "title": "Billing",
    "active": false,
    "url": "/Account/LoginRedirect.aspx?tabId=1",
    "icon": "bill"
  },
  {
    "title": "Orders",
    "active": false,
    "url": "/orders",
    "routerLink": true,
    "icon": "delivery"
  },
  {
    "title": "Faults",
    "active": false,
    "url": "/FaultManagement/Online/FMDashboard.aspx",
    "icon": "fault"
  },
  {
    "title": "Users",
    "active": false,
    "url": "/Account/GroupsAndPermissions",
    "icon": "users"
  },
  {
    "title": "Messages",
    "active": false,
    "url": "/messages",
    "routerLink": true,
    "icon": "messages"
  },
  {
    "title": "Profile",
    "active": false,
    "url": "/Account/AccountSettings.aspx",
    "icon": "profile"
  },
  {
    "title": "Email",
    "active": false,
    "url": "/Account/EmailRedirect.aspx?view=email",
    "icon": "mail"
  }
];

storiesOf('Components /Navigation', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        CommonModule,
        RouterModule.forRoot([], { useHash: true }),
        I18nFakeModule
      ],
      declarations: [NavigationComponent, OMClickDirective],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
      ],
    })
  )
  .add('Main', () => ({
    // component: NavigationComponent,
    template: `<bt-navigation [items]="items"></bt-navigation>`,
    props: {
      accountName: 'Group 1',
      items: object('Menu', items)
    },
  }));
