import {
    OnInit,
    Component,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
    ViewEncapsulation,
} from '@angular/core';
import { LocalStorageService } from '@my-account/shared/services/localstorage.service';
import { OMService } from 'libs/analytics/src/lib/service/om.service';

@Component({
    selector: 'nav-tooltip-modal',
    templateUrl: './nav-tooltip.component.html',
    styleUrls: ['./nav-tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None,
})
export class NavTooltipComponent implements OnInit {
    loadNavServicesTooltip: boolean = false;
    KEY_ONBOARDING = 'OnBoardingLoaded';

    constructor(
        private localStorage: LocalStorageService,
        private om: OMService
    ) { }

    @Output() Visible = new EventEmitter();

    classList = document.querySelector('body') ?.classList;
    className = 'fixed-body';

    ngOnInit(): void {
        this.showServicesTooltipModel();
    }

    loadDashboard() {
        this.loadNavServicesTooltip = false;
        var url = '#';
        window.open(url, '_self');
        this.classList ?.remove(this.className);
    }
    loadServices() {
        this.loadNavServicesTooltip = false;
        var url = '#/services';
        window.open(url, '_self');
    }
    showServicesTooltipModel() {

        let OnBoardingLoadedStatus = this.localStorage.getItem(
            this.KEY_ONBOARDING,
            '0'
        );


        if (OnBoardingLoadedStatus == '1') {
            this.loadNavServicesTooltip = true;
            setTimeout(() => {
                this.classList ?.add(this.className);
            }, 1000);
            this.localStorage.setItem(this.KEY_ONBOARDING, '2');
            this.om.Load({
                i: 126,
                e: '',
                m: '',
                l: '',
            });
        } else {
            this.classList ?.remove(this.className);
        }

    }
}
