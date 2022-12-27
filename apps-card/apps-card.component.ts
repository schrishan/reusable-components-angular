import { Component, Inject, Input } from '@angular/core';
import { MyAccountEnvironment } from '@my-account/shared';
import { ENV } from '@my-account/tokens';

@Component({
  selector: 'bt-apps-card',
  templateUrl: './apps-card.component.html',
  styleUrls: ['./apps-card.component.scss']
})
export class AppsCardComponent {
  @Input() dataObj: any;

  constructor(
    @Inject(ENV) private environment: MyAccountEnvironment,
  ) { }
  public imgUrl: string = this.environment.ImageURL;

  goToLink(url: string){
    window.open(url, "_blank");
}

}
