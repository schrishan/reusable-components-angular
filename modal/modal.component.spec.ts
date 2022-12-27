import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ModalComponent,
  ModalBodyComponent,
  ModalHeaderComponent,
} from './modal.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <bt-modal [visible]="true">
      <bt-modal-body>Hello world</bt-modal-body>
    </bt-modal>
  `,
})
class TestHostComponent {}

describe('ModalComponent Wrapper', () => {
  describe('ModalComponent', () => {
    let component: ModalComponent;

    beforeEach(() => {
      component = new ModalComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should hide modal', async () => {
      component.hide();
      expect(component.visible).toBeFalsy();
    });

    it('should show modal', async () => {
      component.show();
      expect(component.visible).toBeTruthy();
    });
  });

  describe('Modal content', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ModalComponent,
          ModalBodyComponent,
          ModalHeaderComponent,
          TestHostComponent,
        ],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should render the body value', () => {
      const modal = fixture.debugElement.query(By.css('bt-modal-body'));
      expect(modal.nativeElement.innerHTML).toContain('Hello world');
    });

    afterEach(() => {
      fixture.destroy();
    });
  });
});
