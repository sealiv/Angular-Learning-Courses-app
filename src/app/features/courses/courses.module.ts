import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {CoursesService} from "../services/courses.service";

@NgModule({
  declarations: [],
  imports: [ CommonModule, ReactiveFormsModule ],
  providers: [ CoursesService ],
})
export class CoursesModule { }
