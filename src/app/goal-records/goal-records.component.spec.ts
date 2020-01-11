import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalRecordsComponent } from './goal-records.component';

describe('GoalRecordsComponent', () => {
  let component: GoalRecordsComponent;
  let fixture: ComponentFixture<GoalRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
