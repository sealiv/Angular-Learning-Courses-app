import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../../auth/models";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userName = '';
  btnText = 'logOut';

  loggedInUser = {} as User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    console.log('user = ' + this.loggedInUser.username)
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate([this.authService.getLoginUrl()]);
  }

}
