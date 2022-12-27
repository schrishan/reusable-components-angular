import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';
import { withKnobs } from '@storybook/addon-knobs';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { I18nFakeModule } from '@storybook-config/i18n-fake.module';
import { ENV } from '@my-account/tokens';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

storiesOf('Components /Breadcrump', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        CommonModule,
        I18nFakeModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([], { useHash: true }),
        HttpClientModule
      ],
      declarations: [BreadcrumbComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        {
          provide: ENV,
          useValue: {
            production: false,
            apigeeHost: '',
            authAPI: '/assets/api/token.json',
            configAPI: '/assets/api/config.json',
            priceAPI: '/assets/api/getpricechangetable.json',
            billAPI: '/assets/api/bill.json',
            i18nURL: '/assets/i18n/',
            clientProfileAPI: '/assets/api/client-profile.json',
            loginURL: '/',
            userAPI: '/assets/api/user.json',
            deployURL: '/',
            domainHostingAPI: '/assets/api/domain-hosting.json',
            clientId: 'ab7535b4-ecf6-4670-8fec-fc3f953a7bee',
            notificationAPI: '/assets/api/notifications.json',
            campaignMessagesAPI: '/assets/api/campaign-messages-response.json',
            messageProxyURL: '',
            downloadMessageURL: '',
            downloadAcmMessageURL: '',
            letterURL: ''
          }
        },

      ]
    })
  )
  .addParameters({ component: BreadcrumbComponent })
  .add('Basic', () => ({
    component: BreadcrumbComponent,
    template: `
    <bt-breadcrumb></bt-breadcrumb>
    `,
    props: {}
  }));
