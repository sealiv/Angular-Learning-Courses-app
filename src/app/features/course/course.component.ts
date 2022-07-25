import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { faGraduationCap, faHammer, faTrash } from '../../shared/shared.module';
import {Router} from "@angular/router";
import {UserService} from "../../user/services/user.service";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() editable = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() okButtonText: string = '';
  @Input() cancelButtonText: string = '';

  @Input() course = {
    id: 0,
    courseTitle: '',
    authors: [''],
    duration:  0,
    created: new Date(),
    text: '',
    edit: false
  };

  @Output() newEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  courseIcon = faGraduationCap;
  editIcon = faHammer;
  deleteIcon = faTrash;

  constructor(private coursesComponent: CoursesComponent, private router: Router, private userService: UserService) {}

  showCourse(id: number){
    const path = '/courses/' + id;
    this.router.navigate([path]);
  }

  editCourse(id: number){
    const path = '/courses/edit/' + id;
    this.router.navigate([path]);
  }

  private confirmWindow: any;

  isAdmin() {
    return this.userService.isUserAdmin();
  }

  add(modal: any) {
    this.confirmWindow = modal;
  }

  openModal(title: string) {
    this.confirmWindow.open();
  }

  closeButton() {
    this.confirmWindow.close();
  }

  okButton() {
    this.confirmWindow.close();
    const newCourses: any = [];
    this.coursesComponent.getCourses().forEach((i)=> {
      if (i.courseTitle != this.course.courseTitle) {
        newCourses.push(i);
      }
    })
    this.coursesComponent.setCourses(newCourses);
  }
}
