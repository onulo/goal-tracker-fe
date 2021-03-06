import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {OKTA_CONFIG, OktaAuthModule} from '@okta/okta-angular';
import {GoalsComponent} from './goals/goals.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth-interceptor';
import {GoalFormComponent} from './goal-form/goal-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GoalHeadComponent} from './goal-head/goal-head.component';
import {AddRecordModalComponent} from './add-record-modal/add-record-modal.component';
import {environment} from '../environments/environment';
import {RecordsComponent} from './records/records.component';
import {GoalChartComponent} from './goal-chart/goal-chart.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoalsComponent,
    GoalFormComponent,
    GoalHeadComponent,
    AddRecordModalComponent, RecordsComponent, GoalChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(environment.authConfig),
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: environment.authConfig},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
