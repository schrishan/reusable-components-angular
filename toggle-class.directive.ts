import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[btToggleClass]'
})
export class ToggleClassDirective {
  private isClassNameToggled = false;
  private originalClassName: string;

  @Input() private btToggleClass = 'bt-active';
  @HostBinding('class') get hostClasses() {
    return (
      this.originalClassName +
      (this.isClassNameToggled ? ' ' + this.btToggleClass : '')
    );
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleClass();
  }

  @HostListener('window:click', ['$event']) onWindowClick(event: MouseEvent) {
    if (this.isClassNameToggled) {
      this.toggleClass();
    }
  }

  constructor(elementRef: ElementRef) {
    this.originalClassName = elementRef.nativeElement.className;
  }

  public toggleClass() {
    this.isClassNameToggled = !this.isClassNameToggled;
  }
}
