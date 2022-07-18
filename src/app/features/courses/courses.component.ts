import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {ActivatedRoute} from "@angular/router";
import { ParamMap} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  count = 0;

  confirmWindowInputs = {
    'title': 'Removing course',
    'message': 'Are you confirm removing this course?',
    'okButtonText': 'Remove course',
    'cancelButtonText': 'Close without removing'
  };

  courses = [];

  private cardInput: any;

  showCourse(newItem: string) {
    console.log('show course ' + newItem + '...');
  }

  addCourse() {
    if(this.count < 4) {
      this.courses.push(this.coursesService.courses$$.getValue()[this.count++]); //this.sources[this.count++]
    }
  }

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
    // console.log('Courses.length = ' + coursesService.courses$$.value.length);
    // this.courses = [];
  }

  ngOnInit(): void {
    this.route.pathFromRoot.forEach( v =>
      console.log('params = ' + v)
    );
  }
}


