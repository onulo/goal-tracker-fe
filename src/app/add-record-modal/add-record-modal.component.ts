import {Component, Input, OnInit} from '@angular/core';
import {Goal} from '../goal-form/goal';
import {Record} from '../Record';
import {GoalService} from '../goal.service';

@Component({
  selector: 'app-add-record-modal',
  templateUrl: './add-record-modal.component.html',
  styleUrls: ['./add-record-modal.component.css']
})
export class AddRecordModalComponent implements OnInit {

  @Input() goal: Goal;
  record: Record = new Record();

  constructor(private goalService: GoalService) {
  }

  ngOnInit() {
  }

  addRecord() {
    const record = Object.assign({}, this.record);
    if (record.timeStamp == null) {
      record.timeStamp = new Date();
    }
    if (this.goal.records === null) {
      this.goal.records = new Array<Record>();
    }
    this.goal.records.push(record);
    this.goalService.createRecord(this.goal.uid, record).subscribe();
  }
}
