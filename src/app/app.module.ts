import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './auth/services/auth-guard.service';
import {AuthService} from './auth/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "./features/modal/modal.module";
import {RegistrationComponent} from "./features/registration/registration.component";
import {CoursesComponent} from "./features/courses/courses.component";
import {CourseComponent} from "./features/course/course.component";
import {NewCourseComponent} from "./features/course-new/new-course.component";


@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, ModalModule, ReactiveFormsModule,
    // LoginModule,
    // RegistrationComponent, CoursesComponent, CourseComponent, NewCourseComponent
  ],
  declarations: [
    AppComponent,
    // LoginComponent,
    RegistrationComponent, CoursesComponent, CourseComponent, NewCourseComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
