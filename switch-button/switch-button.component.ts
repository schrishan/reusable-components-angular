import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bt-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit {

  @Input() on = true;
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.on = !this.on;
    this.onChange.emit(this.on);
  }
}
