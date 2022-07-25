import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CoursesComponent } from './features/courses/courses.component';
import { CourseComponent } from './features/course/course.component';
import { SharedModule } from './shared/shared.module';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from './features/modal/modal.module';
import {NewCourseComponent} from "./features/course/new-course.component";
import {CourseModule} from "./features/course/course.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, CoursesComponent, CourseComponent, NewCourseComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, ModalModule, FormsModule, ReactiveFormsModule, CourseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
