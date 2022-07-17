import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";


const registrationFormsRoute: Route[] = [
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule.forChild(registrationFormsRoute) ]
})
export class RegistrationModule { }
