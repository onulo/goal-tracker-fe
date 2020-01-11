import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Goal} from '../goal-form/goal';

@Component({
  selector: 'app-goal-head',
  templateUrl: './goal-head.component.html',
  styleUrls: ['./goal-head.component.css']
})
export class GoalHeadComponent implements OnInit {

  @Input()
  goal: Goal;

  @Output()
  goalDeleted = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteGoal(goal: Goal) {
    this.goalDeleted.emit(goal);
  }

}
