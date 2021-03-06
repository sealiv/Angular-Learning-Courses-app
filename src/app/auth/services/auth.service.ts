import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from "../models";
import {SessionStorageService} from "./session-storage.service";
import {UserStoreService} from "../../user/services/user-store.service";

@Injectable({providedIn: 'root'})
export class AuthService {

  private isAuthorized$$ = new BehaviorSubject(this.userStoreService.getAll());
  public isAuthorized$ = new Observable<boolean>();
  public isAuthorized: boolean = false;

  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  private user = {} as User;

  getAllUsers(): Observable<User[]> {
    return this.isAuthorized$$.asObservable();
  }

  constructor(@Inject(Window) private window: Window,
              private sessionStorageService: SessionStorageService,
              private userStoreService: UserStoreService) {
  }

  isUserAuthenticated(email: string, password: string): Observable<boolean> {
    this.checkUser(email, password);
    return this.isAuthorized$;
  }

  checkUser(email: string, password: string): void {
    this.isAuthorized$ = this.isAuthorized$$.asObservable().pipe(
      map(users => {
        const user = users.find(user => (user.email === email) && (user.password === password));
        this.user = user != null ? user : {} as User;
        this.isAuthorized = user != null;
        if (!!user) {
          const token = user.id + '_' + user.username + '_' + user.email + '_' + new Date().valueOf();
          this.sessionStorageService.setToken(token);
        }
        return this.isAuthorized;
      }
    ));
  }

  isUserLogin(): boolean {
    return this.isAuthorized;
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

  getUser(): User {
    return this.user;
  }

  logoutUser(): void {
    this.user = {} as User;
    this.isAuthorized = false;
  }
}
