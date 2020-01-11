import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Goal} from './goal-form/goal';
import {Observable} from 'rxjs';
import {Record} from './Record';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private httpClient: HttpClient) {
  }

  createGoal(clientId: string, goal: Goal) {
    return this.httpClient.post<void>('http://localhost:8080/api/v1/clients/' + clientId + '/goals', goal).pipe();
  }

  getGoals(clientId: string): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/v1/clients/' + clientId + '/goals').pipe();
  }

  removeGoal(goalUid: string) {
    return this.httpClient.delete('http://localhost:8080/api/v1/goals/' + goalUid).pipe();
  }

  createRecord(goalUid: string, record: Record): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/goals/' + goalUid + '/records', record).pipe();
  }


}
