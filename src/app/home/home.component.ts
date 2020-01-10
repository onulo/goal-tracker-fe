import {Component, Input, OnInit} from '@angular/core';
import {OktaAuthService, UserClaims} from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private oktaAuthService: OktaAuthService) {
    this.oktaAuthService.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
  }
}
