import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from "./user.reducer";
import {Roles} from "../../auth/models";

const getUserState = createFeatureSelector<UserState>('user');

export const getName = createSelector(getUserState, (state: UserState) => state.user.username);
export const isAdmin = createSelector(getUserState, (state: UserState) => state.user.role === Roles.admin);

