import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthorizedGuard} from './auth/guards/authorized.guard';
import {AuthService} from './auth/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "./features/modal/modal.module";
import {RegistrationComponent} from "./features/registration/registration.component";
import {CoursesComponent} from "./features/courses/courses.component";
import {CourseComponent} from "./features/course/course.component";
import {NewCourseComponent} from "./features/course-new/new-course.component";
import {CoursesService} from "./features/courses/services/courses.service";
import {NonAuthorizedGuard} from "./auth/guards/non-authorized.guard";
import {UserService} from "./user/services/user.service";
import {AdminGuard} from "./user/services/admin.guard";
import {UserStoreService} from "./user/services/user-store.service";
import {SessionStorageService} from "./auth/services/session-storage.service";


@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, ModalModule, ReactiveFormsModule, FormsModule,
  ],
  declarations: [ AppComponent, /*RegistrationComponent,*/ CoursesComponent, CourseComponent, NewCourseComponent ],
  providers: [
    AuthService,
    SessionStorageService,
    AuthorizedGuard,
    NonAuthorizedGuard,
    CoursesService,
    UserService,
    UserStoreService,
    AdminGuard,
    { provide: Window, useValue: window } ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
