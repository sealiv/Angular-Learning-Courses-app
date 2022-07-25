import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {RegistrationComponent} from "../features/registration/registration.component";

const authRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
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
  declarations: [RegistrationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
