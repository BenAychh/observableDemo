import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObservableComponent } from './view-observable.component';

describe('ViewObservableComponent', () => {
  let component: ViewObservableComponent;
  let fixture: ComponentFixture<ViewObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
