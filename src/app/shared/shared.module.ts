import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export { faTrash, faGraduationCap, faHammer, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [CommonModule, FontAwesomeModule],

  declarations: [CommonComponent],
  exports: [CommonComponent, FontAwesomeModule]
})
export class SharedModule {
}
