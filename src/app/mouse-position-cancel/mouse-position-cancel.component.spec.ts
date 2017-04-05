import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousePositionCancelComponent } from './mouse-position-cancel.component';

describe('MousePositionCancelComponent', () => {
  let component: MousePositionCancelComponent;
  let fixture: ComponentFixture<MousePositionCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousePositionCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousePositionCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
