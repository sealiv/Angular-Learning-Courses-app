import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Roles, User} from "../models";

const USERS: User[] = [
  {
    id: 1,
    username: 'maria admin',
    email: '1',
    password: '1',
    role: Roles.admin,
  },
  {
    id: 2,
    username: 'alex admin',
    email: '2',
    password: '2',
    role: Roles.admin,
  },
  {
    id: 3,
    username: 'alex user',
    email: '3',
    password: '3',
    role: Roles.user,
  }
];

@Injectable({providedIn: 'root'})
export class AuthService {
  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser = {} as User;

  users$$ = new BehaviorSubject(USERS);

  getAllUsers(): Observable<User[]> {
    return this.users$$.asObservable();
  }

  isUserAuthenticated(email: string, password: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map(users => {
        const user = users.find(user => (user.email === email) && (user.password === password));

        this.loggedInUser = user != null ? user : {} as User;
        if (user != null) {
          this.isloggedIn = !!user;
        }
        console.log('user from auth.service new = ' + this.loggedInUser.username);
        return this.isloggedIn;
      }));

  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getLoginUrl(): string {
    return this.loginUrl;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
