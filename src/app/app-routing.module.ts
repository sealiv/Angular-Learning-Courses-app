import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/services/auth-guard.service';
import {CoursesComponent} from "./features/courses/courses.component";
import {NewCourseComponent} from "./features/course-new/new-course.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  { path: 'registration', component: RegistrationComponent },
  // {
  // path: 'registration',
  // loadChildren: () =>
  //   import('./auth/auth.module').then((m) => m.AuthModule),
  // path: 'registration', component: RegistrationComponent
  // },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/add', component: NewCourseComponent },
      { path: 'courses/edit/:id', component: NewCourseComponent },
      { path: 'courses/:id', component: CoursesComponent },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**', component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
