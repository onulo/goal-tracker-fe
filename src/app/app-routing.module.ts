import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';
import {GoalsComponent} from './goals/goals.component';
import {GoalFormComponent} from './goal-form/goal-form.component';


const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'goal-form',
    component: GoalFormComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'goals',
    component: GoalsComponent,
    canActivate: [OktaAuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
