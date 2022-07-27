import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../../auth/models";
import {UserFacade} from "../../../user/store/user.facade";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {requestCurrentUser} from "../../../user/store/user.actions";
import {UserState} from "../../../user/store/user.reducer";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userName = '';
  btnText = 'logOut';

  loggedInUser = {} as User;
  // name = this.userFacade.name$;
  // isAdmin = this.userFacade.isAdmin$;

  constructor(private authService: AuthService, private router: Router, private userFacade: UserFacade,
              private store: Store<{ user: UserState }>) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getUser();
    console.log('user = ' + this.loggedInUser.username);
    this.store.dispatch(requestCurrentUser());
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate([this.authService.getLoginUrl()]);
  }

  user$: Observable<any> = this.store.select('user');
}
