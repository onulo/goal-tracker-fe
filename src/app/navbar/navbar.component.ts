import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {OktaAuthService, UserClaims} from '@okta/okta-angular';
import {ClientServiceService} from '../client-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;
  userId: string;

  constructor(public oktaAuth: OktaAuthService, public clientService: ClientServiceService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );

    // TODO move somewhere
    this.clientService.getOrCreateClient().subscribe((data: any) => {
      this.userId = data;
    });
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.loginRedirect('/');
  }

}
