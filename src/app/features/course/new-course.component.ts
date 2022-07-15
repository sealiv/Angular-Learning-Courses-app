import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./course.component.css', '../../shared/components/shared.style.css']
})
export class NewCourseComponent implements OnInit {

  btnText = 'Create course';
  btnAuthorText = 'Create author';
  btnDelAuthorText = 'Delete author';
  hasError = false;
  hasError1 = false;
  hasError2 = false;
  hasError3 = false;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      courseTitle: new FormControl(null),
      author: new FormControl(null),
      duration: new FormControl(null),
      created: new FormControl(null),
      text: new FormControl(null)
    });
  }

  authors = [];

  private cardInput: any;

  showCourse(newItem: string) {
    console.log('show course ' + newItem + '...');
  }

  addAuthor(name: string) {
    this.authors.push(name);
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


  add() {
    if (!this.getErrors()) {
      console.log('add new Course: ' + this.form.value.courseTitle + ', ' + this.form.value.author + ', ' + this.form.value.text);
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
