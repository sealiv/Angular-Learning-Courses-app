import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from "./auth.reducer";
import { isUserAuthorized, getToken, getSpecificErrorMessage } from './auth.selectors';
import {requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister} from "./auth.actions";
import {SessionStorageService} from "../services/session-storage.service";
import {User} from "../models";

@Injectable()
export class AuthStateFacade {

  isAuthorized$ = this.store.select(isUserAuthorized);
  getToken$ = this.store.select(getToken);
  getLoginErrorMessage$ = this.store.select(getSpecificErrorMessage);
  getRegisterErrorMessage$ = this.store.select(getSpecificErrorMessage);

  constructor(private store: Store<AuthState>, private sessionStorage:SessionStorageService) {}

  login(body: User) {
    this.store.dispatch(requestLogin({user: body}));
  }

  register(body: User) {
    this.store.dispatch(requestRegister({user: body}))
  };

  logout() {
    this.store.dispatch(requestLogout());
  }

  closeSession() {
    this.store.dispatch(requestLogoutSuccess());
  }

  setAuthorization() {
    this.store.dispatch(requestLoginSuccess({token: sessionStorage.getToken()}));
  }
}
