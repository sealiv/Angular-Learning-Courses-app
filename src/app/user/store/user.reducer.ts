import {createReducer, on} from '@ngrx/store';
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from "./user.actions";
import {Roles, User} from "../../auth/models";

/*export interface UserState {
  isAdmin: boolean,
  name: string
}

export const initialState: UserState = {
  isAdmin: false,
  name: ''
};*/

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: {} as User
};

export const userReducer = createReducer(
  initialState,
  on(requestCurrentUser, state => ({ ...state })),
  on(requestCurrentUserSuccess, (state, { user }) => ({ ...state, user: user })),
  // on(requestCurrentUserSuccess, (state, { name, isAdmin }) => ({ ...state, name: name, isAdmin: isAdmin })),
  on(requestCurrentUserFail, (state) => ({ ...state }))
);
