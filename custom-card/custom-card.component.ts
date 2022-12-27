import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bt-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
