import { createAction, props } from '@ngrx/store';
import {User} from "../models";

export const requestLogin = createAction('[Login Page] Login', props<{user: User}>());
export const requestLoginSuccess = createAction('[Login Page] Login Success', props<{ token: string }>());
export const requestLoginFail = createAction('[Login Page] Login Failure', props<{ errorMessage: string}>());

export const requestRegister = createAction('[Register Page] Register', props<{user: User}>());
export const requestRegisterSuccess = createAction('[Register Page] Register Success');
export const requestRegisterFail = createAction('[Register Page] Register Failure', props<{ errorMessage: string}>());

export const requestLogout = createAction('[Logout Page] Logout');
export const requestLogoutSuccess = createAction('[Logout Page] Logout Success');




