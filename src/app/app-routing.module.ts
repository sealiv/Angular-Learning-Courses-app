import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthorizedGuard} from './auth/guards/authorized.guard';
import {CoursesComponent} from "./features/courses/courses.component";
import {NewCourseComponent} from "./features/course-new/new-course.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {AppComponent} from "./app.component";
import {NonAuthorizedGuard} from "./auth/guards/non-authorized.guard";

const routes: Routes = [
/*  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },*/
    { path: 'registration', component: RegistrationComponent, canActivate: [NonAuthorizedGuard] },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthorizedGuard],
    children: [
/*      { path: 'article',
        loadChildren: () =>
        import('./article/article.module').then((m) => m.ArticleModule)},*/
      { path: 'courses',
        loadChildren: () =>
        import('./features/courses/courses.module').then((m) => m.CoursesModule)},
/*      { path: 'courses', component: CoursesComponent },
      { path: 'courses/add', component: NewCourseComponent },
      { path: 'courses/edit/:id', component: NewCourseComponent },
      { path: 'courses/:id', component: CoursesComponent },*/
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NonAuthorizedGuard]
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
