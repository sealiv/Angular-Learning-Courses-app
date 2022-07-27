import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import {Author} from "../../features/models";
import {AuthorsState} from "./authors.reducer";
import {requestAddAuthor, requestAuthors} from "./authors.actions";
import {getAddedAuthors, getAuthors} from "./authors.selectors";

@Injectable()
export class AuthorsStateFacade {

  constructor(private store: Store<AuthorsState>) {}

  getAuthors$ = this.store.select(getAuthors);
  addedAuthor$ = this.store.select(getAddedAuthors);

  getAuthors() {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(author: Author) {
    this.store.dispatch(requestAddAuthor({ author }));
  };
}
