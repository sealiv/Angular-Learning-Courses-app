import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UserService} from "../services/user.service";

import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";
import {Roles} from "../../auth/models";

@Injectable()
export class UserEffects {

  getCurrentUser$ = createEffect(() =>
    this.actions2$.pipe(
      ofType(requestCurrentUser),
      mergeMap(() =>
        of(this.userService.getCurrentUser())
          .pipe(
            map(user => (requestCurrentUserSuccess({name: user.username, isAdmin: user.role === Roles.admin}) )),
            catchError(() => of(requestCurrentUserFail()))
          )
      )
    )
  );

  constructor(
    private actions2$: Actions,
    private userService: UserService,
  ) {}
}
