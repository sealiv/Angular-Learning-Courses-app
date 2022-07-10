import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { faGraduationCap, faHammer, faTrash } from '../../shared/shared.module';

export interface Course {
  courseTitle: string,
  authors: string[],
  duration: number,
  created: Date,
  text: string,
  edit: boolean
}

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
    courseTitle: '',
    authors: [''],
    duration:  0,
    created: new Date(),
    text: '',
    edit: false
  };

  @Output() newEvent = new EventEmitter<string>();

  addNewShowIvent(value: string) {
    if (value.length) {
      console.log('click on ' + value);
      this.newEvent.emit(value);
    }
  }

  @Output() newItemEvent3 = new EventEmitter<string>();

  addNewItem(value: string) {
    if (value.length) {
      this.newItemEvent3.emit(value);
    }
  }

  ngOnInit(): void {
  }

  courseIcon = faGraduationCap;
  editIcon = faHammer;
  deleteIcon = faTrash;

  constructor(private coursesComponent: CoursesComponent) {}

  private confimWindow: any;

  add(modal: any) {
    this.confimWindow = modal;
  }

  openModal(title: string) {
    this.confimWindow.open();
  }

  closeButton() {
    this.confimWindow.close();
  }

  okButton() {
    this.confimWindow.close();
    const newCourses: any = [];
    this.coursesComponent.courses.forEach((i)=> {
      if (i.courseTitle != this.course.courseTitle) {
        newCourses.push(i);
      }
    })
    this.coursesComponent.courses = newCourses;
  }
}