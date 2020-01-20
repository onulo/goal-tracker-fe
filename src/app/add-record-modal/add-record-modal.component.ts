import {Component, Input, OnInit} from '@angular/core';
import {Goal} from '../goal-form/goal';
import {Record} from '../Record';
import {GoalService} from '../goal.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-record-modal',
  templateUrl: './add-record-modal.component.html',
  styleUrls: ['./add-record-modal.component.css']
})
export class AddRecordModalComponent implements OnInit {

  @Input() goal: Goal;
  record: Record = new Record();

  formGroup = new FormGroup({
    value: new FormControl(
      '',
      Validators.required),
    recordDate: new FormControl(
      '',
      Validators.required)
  });

  constructor(private goalService: GoalService, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  addRecord() {
    const record = Object.assign({}, this.record);
    if (this.goal.records === null) {
      this.goal.records = new Array<Record>();
    }
    this.goalService.createRecord(this.goal.uid, record).subscribe((data: Record) => {
      this.goal.records.push(data);
      console.table(this.goal.records);
    });
  }

  onSubmit() {
    console.log('sumbitted: %o', this.formGroup.value);
    this.goalService.createRecord(this.goal.uid, this.formGroup.value).subscribe((data: Record) => {
      this.goal.records.push(data);
    });
    this.modalService.dismissAll();
  }

  openModal(targetModal: any, record: Record) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

  }
}
