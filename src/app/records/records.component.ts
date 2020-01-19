import {Component, Input, OnInit} from '@angular/core';
import {Record} from '../Record';
import {GoalService} from '../goal.service';
import {Goal} from '../goal-form/goal';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  @Input()
  goal: Goal;

  constructor(private goalService: GoalService) {
  }

  ngOnInit() {
  }

  deleteRecord(goal: Goal, record: Record) {
    // TODO no id in time of creation
    const uid1 = record.uid;
    const index = this.goal.records.indexOf(record);
    this.goal.records.splice(index, 1);
    if (uid1) {
      this.goalService.deleteRecord(goal.uid, record.uid).subscribe(() => {
        console.log('record deleted');
      });
    }

  }
}
