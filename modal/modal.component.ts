import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'bt-modal-header',
  template: `
    <ng-content></ng-content>
  `
})
export class ModalHeaderComponent {
  @HostBinding('class') class = 'modal-header-content';
}

@Component({
  selector: 'bt-modal-body',
  template: `
    <ng-content></ng-content>
  `
})
export class ModalBodyComponent {
  @HostBinding('class') className = 'modal-body';
}

@Component({
  selector: 'bt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnDestroy {
  // tslint:disable-next-line: variable-name
  private _visible = true;
  get visible(): boolean {
    return this._visible;
  }

  @Input('visible')
  set visible(value: boolean) {
    this._visible = value;
    this.fixBodyToggle(value);
  }
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnDestroy() {
    this.fixBodyToggle(false);
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  private fixBodyToggle(visible: boolean) {
    const classList = document.querySelector('body')?.classList;
    const className = 'fixed-body';
    if (visible && !classList?.contains(className)) {
      classList?.add(className);
    } else if (!visible && classList?.contains(className)) {
      classList?.remove(className);
    }
  }
}
