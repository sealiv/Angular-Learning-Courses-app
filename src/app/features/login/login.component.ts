import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/components/shared.style.css']
})
export class LoginComponent {
  invalidCredentialMsg = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  takeLogin(): void {
    let email = this.email ? this.email : '';
    let password = this.password ? this.password : '';

    this.authService.isUserAuthenticated(email, password).pipe(
      tap(isAuthenticated => {
        console.log(isAuthenticated)
        if (isAuthenticated) {
          let url = this.authService.getRedirectUrl();
          console.log(url)
          this.router.navigate([url]);

        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }),
    ).subscribe();
  }


  email: string = '';
  password: string = '';
  btnText = 'Login';
  hasError1 = false;
  hasError2 = false;

  login() {
    if (!this.getErrors()) {
      console.log('User with email: ' + this.email);
    }
    console.log('hasError = ' + this.getErrors());
  }

  getErrors():boolean {
    return this.hasError1 || this.hasError2;
  }
}
