import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovableButtonsListComponent } from './removable-buttons-list.component';

describe('RemovableButtonsListComponent', () => {
  let component: RemovableButtonsListComponent;
  let fixture: ComponentFixture<RemovableButtonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovableButtonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovableButtonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
