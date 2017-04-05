import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesVsObservablesComponent } from './promises-vs-observables.component';

describe('PromisesVsObservablesComponent', () => {
  let component: PromisesVsObservablesComponent;
  let fixture: ComponentFixture<PromisesVsObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisesVsObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesVsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
