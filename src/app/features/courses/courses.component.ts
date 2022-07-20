import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../models";
import {UserService} from "../../user/services/user.service";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute) {
  }

  confirmWindowInputs = {
    'title': 'Removing course',
    'message': 'Are you confirm removing this course?',
    'okButtonText': 'Remove course',
    'cancelButtonText': 'Close without removing'
  };

  showCourse(newItem: string) {
    console.log('show course ' + newItem + '...');
  }

  getCount(): number {
    return this.coursesService.userCoursesSize(this.authService.getUser());
  }

  addCourse() {
    if(this.getCount() <= this.coursesService.size()) {
      this.coursesService.addUserCourse(this.authService.getUser());
    }
  }
  getCourses(): Course[] {
    const userId = this.authService.getUser().id;
    return this.coursesService.getCoursesByUserId(userId);
  }

  setCourses(courses: Course[]): void {
    const user = this.authService.getUser();
    this.coursesService.setUserCoursesByUser(courses, user);
  }

  getLimit(): number {
    return this.coursesService.size();
  }

  ngOnInit(): void {
  }
}


