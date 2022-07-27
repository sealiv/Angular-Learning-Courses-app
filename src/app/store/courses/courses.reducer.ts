import {createReducer, on} from '@ngrx/store';
import {
  requestAllCourses, requestAllCoursesSuccess, requestAllCoursesFail,
  requestSingleCourse, requestSingleCourseSuccess, requestSingleCourseFail,
  requestFilteredCourses, requestFilteredCoursesSuccess,
  requestDeleteCourse, requestDeleteCourseFail,
  requestEditCourse, requestEditCourseSuccess, requestEditCourseFail,
  requestCreateCourse, requestCreateCourseSuccess, requestCreateCourseFail
} from "./courses.actions";
import {Course} from "../../features/models";


export interface CoursesState {
  allCourses: Course[],
  courses: Course[],
  course: Course,
  isAllCoursesLoading: boolean,
  isSingleCourseLoading: boolean,
  isSearchState: boolean,
  errorMessage: string
}

export const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  course: {} as Course,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
};

export const coursesReducer = createReducer(
  initialState,
  on(requestAllCourses, (state) => ({ ...state })),
  on(requestAllCoursesSuccess, (state, { courses }) => ({ ...state, allCourses: courses, isAllCoursesLoading: true })),
  on(requestAllCoursesFail, (state, { errorMessage }) => ({ ...state, errorMessage: errorMessage }))
);

export const coursesFeatureKey = coursesReducer.name;

export const filteredCoursesReducer = createReducer(
  initialState,
  on(requestFilteredCourses, (state, { duration }) => ({ ...state, duration: duration })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({ ...state, courses: courses, isSearchState:true }))
);

export const singleCourseReducer = createReducer(
  initialState,
  on(requestSingleCourse, (state, { courseId }) => ({ ...state, courseId: courseId })),
  on(requestSingleCourseSuccess, (state, { course }) => ({ ...state, course: course, isSingleCourseLoading: true })),
  on(requestSingleCourseFail, (state, { errorMessage }) => ({ ...state, errorMessage: errorMessage }))
);

export const deleteCourseReducer = createReducer(
  initialState,
  on(requestDeleteCourse, (state, { courseId }) => ({ ...state, courseId: courseId })),
  on(requestDeleteCourseFail, (state, { errorMessage }) => ({ ...state, errorMessage: errorMessage }))
);

export const editCourseReducer = createReducer(
  initialState,
  on(requestEditCourse, (state, { course, id }) => ({ ...state, course, id })),
  on(requestEditCourseSuccess, (state, { course }) => ({ ...state, course: course })),
  on(requestEditCourseFail, (state, { errorMessage }) => ({ ...state, errorMessage: errorMessage }))
);

export const createCourseReducer = createReducer(
  initialState,
  on(requestCreateCourse, (state, { course }) => ({ ...state, course: course })),
  on(requestCreateCourseSuccess, (state, { course }) => ({ ...state, course: course })),
  on(requestCreateCourseFail, (state, { errorMessage }) => ({ ...state, errorMessage: errorMessage }))
);
