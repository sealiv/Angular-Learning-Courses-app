import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CoursesService} from "../../services/courses.service";
import {Course} from "../models";
import {Router} from "@angular/router";

@Component({
  selector: 'course-new',
  templateUrl: './new-course.component.html',
  styleUrls: ['../course/course.component.css', '../../shared/components/shared.style.css']
})
export class NewCourseComponent implements OnInit {

  btnTextCreate = 'Create course';
  btnTextEdit = 'Save changes';
  btnAuthorText = 'Create author';
  btnDelAuthorText = 'Delete author';
  hasError = false;
  hasError1 = false;
  hasError2 = false;
  hasError3 = false;

  form: FormGroup;

  constructor(private coursesService: CoursesService, private router: Router) {
    this.form = new FormGroup({
      courseTitle: new FormControl(null),
      author: new FormControl(null),
      duration: new FormControl(null),
      created: new FormControl(null),
      text: new FormControl(null)
    });
  }

  authors = [];

  isNew(): boolean {
    return true;
  }

  showCourse(newItem: string) {
    console.log('show course ' + newItem + '...');
  }

  addAuthor(name: string) {
    if (name) {
      this.authors.push(name);
    }
  }
  deleteAuthor(name: string) {
    let newAuthors = [];
    this.authors.forEach( v => {
      if(v != name) {
        newAuthors.push(v);
      }
    });
    this.authors = newAuthors;
    console.log('delete Author: ' + name);
  }


  edit() {
    if (!this.getErrors()) {
      const course: Course = {
        authors: this.authors,
        courseTitle: this.form.value.courseTitle,
        created: new Date(),
        duration: this.form.value.duration,
        edit: true,
        id: this.coursesService.getNewId(),
        text: this.form.value.text
      }
      this.coursesService.addNewCourse(course);
      console.log('add new Course: ' + this.form.value.courseTitle + ', ' + this.form.value.author + ', ' + this.form.value.text);
      this.authors = [];
      this.form.reset();
      this.router.navigate(['courses/add']);
    }
  }

  getErrors():boolean {
    return (this.hasError || this.hasError1) || this.hasError2 || this.hasError3;
  }

  ngOnInit(): void {
  }

  get courseTitle() {
    return this.form.get('courseTitle');
  }

  get author() {
    return this.form.get('author');
  }

  get duration() {
    return this.form.get('duration');
  }

  get created() {
    return this.form.get('created');
  }

  get text() {
    return this.form.get('text');
  }
}
