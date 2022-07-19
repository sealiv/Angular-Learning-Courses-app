import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from '../features/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "../shared/shared.module";

const authRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule],
  declarations: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule {}
