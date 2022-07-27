import { createAction, props } from '@ngrx/store';
import {Course} from "../../features/models";

export const requestAllCourses = createAction('[Courses Page] Courses All');
export const requestAllCoursesSuccess = createAction('[Courses Page] Courses All Success', props<{ courses: Course[] }>());
export const requestAllCoursesFail = createAction('[Courses Page] Courses All Failure', props<{ errorMessage: string }>());

export const requestSingleCourse = createAction('[Courses Page] Course', props<{ courseId: number }>());
export const requestSingleCourseSuccess = createAction('[Courses Page] Course Success', props<{ course: Course }>());
export const requestSingleCourseFail = createAction('[Courses Page] Course Failure', props<{ errorMessage: string }>());

export const requestFilteredCourses = createAction('[Courses Page] Course Filtered', props<{ duration: number }>());
export const requestFilteredCoursesSuccess = createAction('[Courses Page] Course Filtered Success', props<{ courses: Course[] }>());

export const requestDeleteCourse = createAction('[Courses Page] Course Delete', props<{ courseId: number }>());
export const requestDeleteCourseFail = createAction('[Courses Page] Course Delete Failure', props<{ errorMessage: string }>());

export const requestEditCourse = createAction('[Courses Page] Course Edit', props<{ course: Course, id: number }>());
export const requestEditCourseSuccess = createAction('[Courses Page] Course Edit Success', props<{ course: Course }>());
export const requestEditCourseFail = createAction('[Courses Page] Course Edit Failure', props<{ errorMessage: string }>());

export const requestCreateCourse = createAction('[Courses Page] Course Create', props<{ course: Course }>());
export const requestCreateCourseSuccess = createAction('[Courses Page] Course Create Success', props<{ course: Course }>());
export const requestCreateCourseFail = createAction('[Courses Page] Course Create Failure', props<{ errorMessage: string }>());
