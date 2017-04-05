import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCancellingComponent } from './smart-cancelling.component';

describe('SmartCancellingComponent', () => {
  let component: SmartCancellingComponent;
  let fixture: ComponentFixture<SmartCancellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCancellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCancellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
