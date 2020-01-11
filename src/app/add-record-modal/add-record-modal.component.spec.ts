import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordModalComponent } from './add-record-modal.component';

describe('AddRecordModalComponent', () => {
  let component: AddRecordModalComponent;
  let fixture: ComponentFixture<AddRecordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
