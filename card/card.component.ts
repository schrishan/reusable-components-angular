import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export enum CardType {
  NONE,
  DEFAULT,
  PRIMARY,
  SUCCESS,
  WARNING,
  INFO,
  UNKNOWN,
  ERROR,
  HORIZONTAL,
  CONNECTED,
  NOTIFICATION,
  READY
};

@Component({
  selector: 'bt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() type: CardType = CardType.PRIMARY;
  @Input() isBoost: string = 'no';

  get classes() {
    switch (this.type) {
      case CardType.DEFAULT:
        return 'bt-card default';
      case CardType.PRIMARY:
        return 'bt-card default primary';
      case CardType.SUCCESS:
        return 'bt-card default success';
      case CardType.INFO:
        return 'bt-card info';
      case CardType.WARNING:
        return 'bt-card default warning';
      case CardType.UNKNOWN:
        return 'bt-card default unknown';
      case CardType.ERROR:
        return 'bt-card default error';
      case CardType.HORIZONTAL:
        return 'bt-card hozntlVw primary';
      case CardType.CONNECTED:
        return 'bt-card default connected';
      case CardType.NOTIFICATION:
        return 'bt-card default notification';
      case CardType.READY:
        return 'bt-card default ready';
      default:
        return '';
    }
  }

}
