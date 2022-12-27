import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bt-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  isSelected: boolean = false;
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleSelect() {
    this.isSelected = !this.isSelected;
    this.clicked.emit(this.isSelected);
  }
}
