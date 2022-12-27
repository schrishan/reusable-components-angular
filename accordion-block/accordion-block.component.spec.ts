import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBlockComponent } from './accordion-block.component';

describe('AccordionBlockComponent', () => {
  let component: AccordionBlockComponent;
  let fixture: ComponentFixture<AccordionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
