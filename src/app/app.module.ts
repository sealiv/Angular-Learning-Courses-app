import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { SharedModule } from './shared/shared.module';


import { FormsModule } from '@angular/forms';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, CoursesComponent, CourseComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, ModalModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}