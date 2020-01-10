import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoalService} from '../goal.service';
import {Goal} from '../goal-form/goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  clientId: string;
  goals: Goal[];

  constructor(private route: ActivatedRoute, private goalService: GoalService) {
  }

  async ngOnInit() {
    await this.route.paramMap.subscribe(params => {
      this.clientId = params.get('clientId');
      // this.clientId = (history.state.data as UserClaims).sub;
    });

    await this.goalService.getGoals(this.clientId).subscribe((data) => {
      this.goals = data;
      console.log('recieved data', this.goals);
    });
  }

  removeGoal(goal: Goal) {
    this.goalService.removeGoal(goal.uid).subscribe(() => {
      const index = this.goals.indexOf(goal);
      this.goals.splice(index, 1);
      console.log('goal removed');
    });
  }

}
