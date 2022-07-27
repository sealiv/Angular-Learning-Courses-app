import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  getAllCourses,
  getCourses,
  getCourse,
  getErrorMessage,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector,
} from './courses.selectors';
import {
  requestAllCourses,
  requestSingleCourse,
  requestFilteredCourses,
  requestDeleteCourse,
  requestEditCourse,
  requestCreateCourse,
} from "./courses.actions";
import {CoursesState} from "./courses.reducer";
import {CoursesService} from "../../services/courses.service";
import {Course} from "../../features/models";

@Injectable()
export class CoursesStateFacade {

  isAllCoursesLoadingSelector$ = this.store.select(isAllCoursesLoadingSelector);
  isSearchingStateSelector$ = this.store.select(isSearchingStateSelector);
  isSingleCourseLoadingSelector$ = this.store.select(isSingleCourseLoadingSelector);
  courses$ = this.store.select(getCourses);
  allCourses$ = this.store.select(getAllCourses);
  course$ = this.store.select(getCourse);
  errorMessage$ = this.store.select(getErrorMessage);

  constructor(private store: Store<CoursesState>, private coursesService: CoursesService) {}

  getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(id: number) {
    this.store.dispatch(requestSingleCourse({courseId: id}))
  };

  getFilteredCourses(searchValue: number) {
    this.store.dispatch(requestFilteredCourses({duration: searchValue}))
  };

  editCourse(body: Course, id: number) {
    this.store.dispatch(requestEditCourse({ course: body, id}))
  };

  createCourse(body: Course) {
    this.store.dispatch(requestCreateCourse({ course: body }))
  };

  deleteCourse(id: number) {
    this.store.dispatch(requestDeleteCourse({courseId: id}))
  };
}

