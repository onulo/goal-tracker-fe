import {Component, OnInit} from '@angular/core';
import {OktaAuthService, UserClaims} from '@okta/okta-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;
  user: UserClaims;

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
        console.log('Authentication state changed to: ', this.isAuthenticated);
        if (isAuthenticated !== true) {
          this.user = null;
        } else {
          this.oktaAuth.getUser().then((user: UserClaims) => {
            this.user = user;
            console.log('Active user: ', this.user);
          });
        }
      }
    );
  }

  async ngOnInit() {
  }

  login() {
    this.oktaAuth.loginRedirect('/');
  }

  goToGoals() {
    this.router.navigate(['/goals', this.user.sub]);
  }

}
