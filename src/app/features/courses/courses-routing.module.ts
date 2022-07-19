import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from './services/can-deactivate.guard';
import {CoursesComponent} from "./courses.component";
import {NewCourseComponent} from "../course-new/new-course.component";

const articleRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    // canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: 'add',
        component: NewCourseComponent,
        // canDeactivate: [CanDeactivateGuard],
      },
      {
        path: ':id',
        component: CoursesComponent,
        // canDeactivate: [CanDeactivateGuard],
      },
      {
        path: 'edit/:id',
        component: NewCourseComponent,
        // canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(articleRoutes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
