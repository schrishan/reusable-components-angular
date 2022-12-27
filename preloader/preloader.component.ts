import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bt-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreloaderComponent {
  constructor() {}
}
