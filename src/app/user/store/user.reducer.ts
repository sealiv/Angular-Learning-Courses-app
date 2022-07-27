import {createReducer, on} from '@ngrx/store';
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";

export interface UserState {
  name: string
  isAdmin: boolean,
}

export const initialState: UserState = {
  name: '',
  isAdmin: false
};

export const userReducer = createReducer(
  initialState,
  on(requestCurrentUser, state => ({ ...state })),
  on(requestCurrentUserSuccess, (state, { name, isAdmin }) => ({ ...state, name: name, isAdmin: isAdmin })),
  on(requestCurrentUserFail, (state) => ({ ...state }))
);

export const userFeatureKey = userReducer.name;
