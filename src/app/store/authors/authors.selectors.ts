import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorsState} from "./authors.reducer";

const getAuthorState = createFeatureSelector<AuthorsState>('author');

export const getAddedAuthors = createSelector(getAuthorState, (state: AuthorsState) => state.authors);
export const getAuthors = createSelector(getAuthorState, (state: AuthorsState) => state.addedAuthor);

