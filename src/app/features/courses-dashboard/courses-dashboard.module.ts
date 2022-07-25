import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {CoursesDashboardComponent} from "./courses-dashboard.component";
import {CoursesRoutingModule} from "./courses-routing.module";
import {CoursesComponent} from "../courses/courses.component";
import {CoursesStoreService} from "../../services/courses-store.service";
import {CourseComponent} from "../course/course.component";
import {SharedModule} from "../../shared/shared.module";
import {ModalModule} from "../modal/modal.module";
import {NewCourseComponent} from "../course-edit/new-course.component";
import {EditCourseComponent} from "../course-edit/edit-course.component";
import {UserModule} from "../../user/user.module";
import {CourseModule} from "../course/course.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    RouterModule,
    SharedModule,
    ModalModule,
    UserModule,
    CourseModule,
  ],
  declarations: [
    CoursesDashboardComponent,
    NewCourseComponent,
    EditCourseComponent,
    CoursesComponent,
    CourseComponent
  ],
  providers: [CoursesService, CoursesStoreService]
})
export class CoursesDashboardModule {
}
