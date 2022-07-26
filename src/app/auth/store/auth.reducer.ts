import {Action, createReducer, on} from '@ngrx/store';
import {
  requestLogin, requestLoginSuccess, requestLoginFail,
  requestRegister, requestRegisterSuccess, requestRegisterFail
} from "./auth.actions";


export interface AuthState {
  isAuthorized: boolean,
  token: string,
  errorMessage: string
}

export const initialState: AuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: ''
};

export const authReducer = createReducer(
  initialState,
  on(requestLogin, (state, {user}) => ({ ...state, user: user })),
  on(requestLoginSuccess, (state, { token }) => ({ ...state, token: token })),
  on(requestLoginFail, (state) => ({ ...state, errorMessage: 'Invalid login' }))
);

export const authFeatureKey = authReducer.name;

export const registerReducer = createReducer(
  initialState,
  on(requestRegister, (state, {user}) => ({ ...state, user: user })),
  on(requestRegisterSuccess, (state) => ({ ...state })),
  on(requestRegisterFail, (state) => ({ ...state, errorMessage: 'Invalid register' }))
);
