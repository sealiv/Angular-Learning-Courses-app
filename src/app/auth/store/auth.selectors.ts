import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from "./auth.reducer";

const getAuthState = createFeatureSelector<AuthState>('auth');

export const isUserAuthorized = createSelector(getAuthState, (state: AuthState) => state.isAuthorized);
export const getToken = createSelector(getAuthState, (state: AuthState) => state.token);
export const getSpecificErrorMessage = createSelector(getAuthState, (state: AuthState) => state.errorMessage);

