import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[btSrcDoc]'
})
export class SrcDocDirective {
  @Input('btSrcDoc')
  set btSrcDoc(value: SafeHtml | undefined) {
    const window = this.elementRef.nativeElement.contentWindow;
    if (window) {
      window.document.write(value || '');
    } else {
      this.elementRef.nativeElement.onload = () => {
        this.elementRef.nativeElement.contentWindow.document.write(value);
      };
    }
  }

  constructor(private elementRef: ElementRef) {
    if (!(this.elementRef.nativeElement instanceof HTMLIFrameElement)) {
      throw new Error('This directive only can be used for Iframe');
    }
  }
}
