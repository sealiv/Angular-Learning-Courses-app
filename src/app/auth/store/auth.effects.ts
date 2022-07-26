import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AuthService} from "../services/auth.service";

import {requestLogin, requestLoginSuccess, requestLoginFail, requestRegister} from "./auth.actions";
import {SessionStorageService} from "../services/session-storage.service";


@Injectable()
export class UserEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      mergeMap(() =>
        of(this.authService.getUser())
          .pipe(
            map(user => (requestLoginSuccess({token: this.sessionStorage.getToken()}) )),
            catchError(() => of(requestLoginFail({ errorMessage: 'Invalid login' })))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestRegister),
      mergeMap(() =>
        of(it)
          .pipe(
            map(() => (requestLoginSuccess({token: this.sessionStorage.getToken()}) )),
            catchError(() => of(requestLoginFail({ errorMessage: 'Invalid register' })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private sessionStorage:SessionStorageService
  ) {}
}
