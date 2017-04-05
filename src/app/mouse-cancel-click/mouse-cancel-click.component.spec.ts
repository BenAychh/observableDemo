import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCancelClickComponent } from './mouse-cancel-click.component';

describe('MouseCancelClickComponent', () => {
  let component: MouseCancelClickComponent;
  let fixture: ComponentFixture<MouseCancelClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseCancelClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseCancelClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
