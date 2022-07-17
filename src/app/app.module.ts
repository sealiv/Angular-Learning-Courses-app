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
import {NewCourseComponent} from "./features/course-new/new-course.component";
import {NewCourseModule} from "./features/course-new/new-course.module";
import {LoginModule} from "./features/login/login.module";
import {RegistrationModule} from "./features/registration/registration.module";
import {CoursesModule} from "./features/courses/courses.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, CoursesComponent, CourseComponent, NewCourseComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, ModalModule, FormsModule, ReactiveFormsModule, LoginModule,
    RegistrationModule, CoursesModule, NewCourseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
