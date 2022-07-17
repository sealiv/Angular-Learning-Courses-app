import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {NewCourseComponent} from "./new-course.component";


const newCourseFormsRoute: Route[] = [
  {
    path: 'courses/add',
    component: NewCourseComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule.forChild(newCourseFormsRoute) ]
})
export class NewCourseModule { }
