import {createReducer, on} from '@ngrx/store';

import {Author} from "../../features/models";
import {
  requestAddAuthor, requestAddAuthorFail,  requestAddAuthorSuccess,
  requestAuthors,  requestAuthorsFail,  requestAuthorsSuccess,
  resetAddedAuthor
} from "./authors.actions";

export interface AuthorsState {
  authors: Author[],
  addedAuthor: Author
}

export const initialState: AuthorsState = {
  authors: [],
  addedAuthor: {} as Author
};

export const authorsReducer = createReducer(
  initialState,
  on(requestAuthors, (state) => ({ ...state })),
  on(requestAuthorsSuccess, (state, { authors }) => ({ ...state, authors })),
  on(requestAuthorsFail, (state, { errorMessage }) => ({ ...state, errorMessage }))
);

export const authorsFeatureKey = authorsReducer.name;

export const authorAddReducer = createReducer(
  initialState,
  on(requestAddAuthor, (state) => ({ ...state })),
  on(requestAddAuthorSuccess, (state, { author }) => ({ ...state, author })),
  on(requestAddAuthorFail, (state, { errorMessage }) => ({ ...state, errorMessage }))
);

export const resetAuthorReducer = createReducer(
  initialState,
  on(resetAddedAuthor, (state) => ({ ...state }))
);
