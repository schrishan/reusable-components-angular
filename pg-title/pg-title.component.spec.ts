import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTitleComponent } from './pg-title.component';

describe('PgTitleComponent', () => {
  let component: PgTitleComponent;
  let fixture: ComponentFixture<PgTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
