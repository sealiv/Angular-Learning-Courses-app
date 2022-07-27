import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from "./user.reducer";

const getUserState = createFeatureSelector<UserState>('user');

export const getName = createSelector(getUserState, (state: UserState) => state.name);
export const isAdmin = createSelector(getUserState, (state: UserState) => state.isAdmin);

