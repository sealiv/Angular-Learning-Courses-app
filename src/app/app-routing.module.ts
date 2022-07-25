import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component";
import {NonAuthorizedGuard} from "./auth/guards/non-authorized.guard";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'courses',
        loadChildren: () =>
        import('./features/courses-dashboard/courses-dashboard.module').then((m) => m.CoursesDashboardModule)},
    ],
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
    canActivate: [NonAuthorizedGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NonAuthorizedGuard],
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
