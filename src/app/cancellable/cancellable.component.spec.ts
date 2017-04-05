import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellableComponent } from './cancellable.component';

describe('CancellableComponent', () => {
  let component: CancellableComponent;
  let fixture: ComponentFixture<CancellableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
