import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {CoursesService} from "./services/courses.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // ArticleRoutingModule,
    // MatListModule,
    RouterModule,
  ],
  declarations: [
    // ArticleComponent,
    // ArticleListComponent,
    // ArticleEditComponent,
  ],
  providers: [CoursesService]
})
export class CoursesModule {
}
