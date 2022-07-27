import { createAction, props } from '@ngrx/store';
import {Author} from "../../features/models";

export const requestAuthors = createAction('[Author Page] Author All');
export const requestAuthorsSuccess = createAction('[Author Page] Author All Success', props<{ authors: Author[] }>());
export const requestAuthorsFail = createAction('[Author Page] Author All Failure', props<{ errorMessage: string }>());

export const requestAddAuthor = createAction('[Author Page] Author Add', props<{ author: Author }>());
export const requestAddAuthorSuccess = createAction('[Author Page] Author Add Success', props<{ author: Author }>());
export const requestAddAuthorFail = createAction('[Author Page] Author Add Failure', props<{ errorMessage: string }>());

export const resetAddedAuthor = createAction('[Author Page] Author Reset');


