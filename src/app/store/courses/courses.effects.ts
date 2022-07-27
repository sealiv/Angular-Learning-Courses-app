import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  requestAllCourses, requestAllCoursesSuccess, requestAllCoursesFail,
  requestSingleCourse, requestSingleCourseSuccess, requestSingleCourseFail,
  requestFilteredCourses, requestFilteredCoursesSuccess,
  requestDeleteCourse, requestDeleteCourseFail,
  requestEditCourse, requestEditCourseSuccess, requestEditCourseFail,
  requestCreateCourse, requestCreateCourseSuccess, requestCreateCourseFail
} from "./courses.actions";
import {CoursesService} from "../../services/courses.service";

@Injectable()
export class UserEffects {

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAllCourses),
      mergeMap(() => this.coursesService.getAllCurses()
          .pipe(
            map(courses => (requestAllCoursesSuccess({courses: courses}) )),
            catchError(() => of(requestAllCoursesFail({ errorMessage: 'Courses not found.' })))
          )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestFilteredCourses),
      mergeMap(action => this.coursesService.getFilteredCurses(action.duration)
        .pipe(
          map(courses => (requestFilteredCoursesSuccess({ courses }) ))
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestSingleCourse),
      mergeMap(action => of(action.courseId)
        .pipe(
          map(() => (requestSingleCourseSuccess({ course: this.coursesService.getCourse(action.courseId) }))),
          catchError(() => of(requestSingleCourseFail(
            { errorMessage: 'Courses with id=' + action.courseId + ' not found.'})))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestDeleteCourse),
      mergeMap(action => of(action.courseId)
        .pipe(
          tap(() => this.coursesService.deleteCourse(action.courseId)),
          map(() => (requestAllCourses())),
          catchError(() => of(requestDeleteCourseFail(
            { errorMessage: 'Courses with id=' + action.courseId + ' not deleted.'})))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestEditCourse),
      mergeMap(action => of(action.course)
        .pipe(
          tap(() => this.coursesService.editCourse(action.course)),
          map(course => (requestEditCourseSuccess({ course }))),
          catchError(() => of(requestEditCourseFail(
            { errorMessage: 'Courses with id=' + action.course.id + ' not changed.'})))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCreateCourse),
      mergeMap(action => of(action.course)
        .pipe(
          tap(() => this.coursesService.addNewCourse(action.course)),
          map(course => (requestCreateCourseSuccess({ course }))),
          catchError(() => of(requestCreateCourseFail(
            { errorMessage: 'Courses with title=' + action.course.courseTitle + ' not created.'})))
        )
      )
    )
  );



  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
  ) {}
}
