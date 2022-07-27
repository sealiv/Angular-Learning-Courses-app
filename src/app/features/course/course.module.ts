import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseTimePipe} from "../../shared/components/course-time.pipe";



@NgModule({
  declarations: [CourseTimePipe],
  exports: [CourseTimePipe],
  imports: [CommonModule,]
})
export class CourseModule { }
