import {Component, OnInit} from '@angular/core';
import {Goal} from './goal';
import {GoalService} from '../goal.service';
import {Router} from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  goal: Goal = Object.create(Goal);

  constructor(private goalService: GoalService, private oktaService: OktaAuthService, private router: Router) {
  }

  ngOnInit() {

  }

  async createGoal() {
    const user = await this.getUserId();

    this.goalService.createGoal(user.sub, this.goal).subscribe(() => {
      console.log('goal created');
      // this.router.navigate(['/goals', user.sub], {state: {data: user}});
      this.router.navigate(['/goals', user.sub]);
    });
  }

  private async getUserId() {
    const user = await this.oktaService.getUser();
    console.log('User is: ', user);
    return user;
  }
}
