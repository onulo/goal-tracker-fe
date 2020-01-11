import {Record} from '../Record';

export class Goal {

  uid: string;
  description: string;
  initialValue: number;
  goalValue: number;
  goalDate: Date;
  records: Array<Record> = new Array<Record>();
}
