import { PreloaderComponent } from './preloader.component';
import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PreloaderService {
  componentRef: ComponentRef<PreloaderComponent> | undefined;
  private count = 0;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public showLoader() {
    this.count++;
    this.dispatch('bt:preloader:show');

    if (this.count === 1) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        PreloaderComponent
      );
      const componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(componentRef.hostView);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);

      this.componentRef = componentRef;
    }

    return () => {
      this.count--;
      if (this.count === 0) {
        this.componentRef?.destroy();

        this.dispatch('bt:preloader:hide');
      }
    };
  }

  dispatch(eventName: string) {
    const event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
    window.dispatchEvent(event);
  }
}
