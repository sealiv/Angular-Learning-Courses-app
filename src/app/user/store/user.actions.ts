import { createAction, props } from '@ngrx/store';
import {User} from "../../auth/models";

export const requestCurrentUser = createAction('[User Page] Get User');
export const requestCurrentUserSuccess = createAction('[User Page] User Success', props<{ user: User }>());
// export const requestCurrentUserSuccess = createAction('[User Page] User Success', props<{ name: string, isAdmin: boolean }>());
export const requestCurrentUserFail = createAction('[User Page] User Failure');
