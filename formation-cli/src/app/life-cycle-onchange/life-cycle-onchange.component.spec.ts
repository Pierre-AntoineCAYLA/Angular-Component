import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleOnchangeComponent } from './life-cycle-onchange.component';

describe('LifeCycleOnchangeComponent', () => {
  let component: LifeCycleOnchangeComponent;
  let fixture: ComponentFixture<LifeCycleOnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
