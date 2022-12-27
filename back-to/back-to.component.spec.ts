import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToComponent } from './back-to.component';

describe('BackToComponent', () => {
  let component: BackToComponent;
  let fixture: ComponentFixture<BackToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
