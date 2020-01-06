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
import {FormsModule} from '@angular/forms';

const config = {
  clientId: '0oa2dy85fyiB7VD9u357',
  issuer: 'https://dev-923407.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoalsComponent,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: config},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
