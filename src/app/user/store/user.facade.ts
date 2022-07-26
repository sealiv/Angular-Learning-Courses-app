import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { UserState } from './user.reducer';
import { getName, isAdmin } from './user.selectors';
import {requestCurrentUser} from "./user.actions";

@Injectable()
export class UserFacade {
  name$ = this.store.select(getName);
  isAdmin$ = this.store.select(isAdmin);

  constructor(private store: Store<UserState>) {}

  loadAll() {
    this.store.dispatch(requestCurrentUser());
  }
}
