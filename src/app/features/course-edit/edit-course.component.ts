import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CoursesService} from "../../services/courses.service";
import {Course} from "../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  // selector: 'course-edit',
  templateUrl: './new-course.component.html',
  styleUrls: ['../course/course.component.css', '../../shared/components/shared.style.css']
})
export class EditCourseComponent implements OnInit {

  btnTextCreate = 'Create course';
  btnTextEdit = 'Save changes';
  btnAuthorText = 'Create author';
  btnDelAuthorText = 'Delete author';
  hasError = false;
  hasError1 = false;
  hasError2 = false;
  hasError3 = false;
  private course: Course;

  form: FormGroup;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private router: Router) {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    console.log('id = ' + id);
    this.course = coursesService.getCourse(id);
    this.authors = this.course.authors
    this.form = new FormGroup({
      courseTitle: new FormControl(this.course.courseTitle),
      author: new FormControl(null),
      duration: new FormControl(this.course.duration),
      created: new FormControl(this.course.created),
      text: new FormControl(this.course.text)
    });
  }

  authors = [];

  isNew(): boolean {
    return false;
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
      this.course.authors = this.authors;
      this.course.courseTitle = this.form.value.courseTitle;
      this.course.created = new Date();
      this.course.duration = this.form.value.duration;
      this.course.text = this.form.value.text;

      console.log('changed Course: ' + this.form.value.courseTitle);
      this.authors = [];
      this.form.reset();
      this.router.navigate(['courses']);
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
