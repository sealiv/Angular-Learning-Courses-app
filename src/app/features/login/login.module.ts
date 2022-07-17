import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from "./login.component";

import { Route, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';


const templateFormsRoute: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, FormsModule, RouterModule.forChild(templateFormsRoute) ]
})
export class LoginModule { }
