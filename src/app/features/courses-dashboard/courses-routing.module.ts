import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CoursesComponent} from "../courses/courses.component";
import {NewCourseComponent} from "../course-edit/new-course.component";
import {CoursesDashboardComponent} from "./courses-dashboard.component";
import {SharedModule} from "../../shared/shared.module";
import {AuthorizedGuard} from "../../auth/guards/authorized.guard";
import {AdminGuard} from "../../user/services/admin.guard";
import {EditCourseComponent} from "../course-edit/edit-course.component";

const articleRoutes: Routes = [
  {
    path: '',
    component: CoursesDashboardComponent,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: 'add',
        component: NewCourseComponent,
        canActivate: [AdminGuard],
      },
      {
        path: ':id',
        component: CoursesComponent,
      },
      {
        path: 'edit/:id',
        component: EditCourseComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(articleRoutes), SharedModule],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
