import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Course, UserCourse} from "../features/models";
import {CoursesStoreService} from "./courses-store.service";
import {User} from "../auth/models";

@Injectable({ providedIn: 'root'})
export class CoursesService {

  constructor(@Inject(Window) private window: Window, private coursesStoreService:CoursesStoreService) {
  }

  courses$$ = new BehaviorSubject(this.coursesStoreService.getAll());

  private COURSER_USERS: UserCourse[] = [];

  getAllCurses(): Observable<Course[]> {
    return this.courses$$.asObservable();
  }

  getNewId(): number {
    return this.courses$$.value.length + 1;
  }

  size(): number {
    return this.courses$$.value.length;
  }

  userCoursesSize(user: User): number {
    return this.getUserCoursesByUserId(user.id).course.length;
  }

  addNewCourse(course: Course) {
    console.log('Created Course: ' + course.courseTitle);
    this.coursesStoreService.create(course);
  }

  addUserCourse(user: User) {
    const userCourse = this.getUserCoursesByUserId(user.id);
    const course = this.courses$$.getValue()[this.userCoursesSize(user)];
    userCourse.course.push(this.courses$$.getValue()[this.userCoursesSize(user)]);

    if(userCourse.course.length == 1) {
      this.COURSER_USERS.push(userCourse);
    }
  }

  getUserCoursesByUserId(id: number): UserCourse {
    for (let i = 0; i < this.COURSER_USERS.length; i++) {
      if (this.COURSER_USERS[i].id === id) {
        return  this.COURSER_USERS[i];
      }
    }
    return {
      id: id,
      course: []
    };
  }

  getCoursesByUserId(id: number): Course[] {
    return this.getUserCoursesByUserId(id).course;
  }

  setUserCoursesByUser(courses: Course[], user: User) {
    this.getUserCoursesByUserId(user.id).course = courses;
  }
}
