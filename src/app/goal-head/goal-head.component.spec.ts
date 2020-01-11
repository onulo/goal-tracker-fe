import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalHeadComponent } from './goal-head.component';

describe('GoalHeadComponent', () => {
  let component: GoalHeadComponent;
  let fixture: ComponentFixture<GoalHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
