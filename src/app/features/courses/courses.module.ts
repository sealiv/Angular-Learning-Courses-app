import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CoursesComponent} from "./courses.component";


const reactiveFormsRoute: Route[] = [
  {
    path: 'courses',
    component: CoursesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule.forChild(reactiveFormsRoute) ]
})
export class CoursesModule { }
