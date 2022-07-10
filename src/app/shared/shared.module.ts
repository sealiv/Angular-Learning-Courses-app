import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
export { faTrash, faGraduationCap, faHammer, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [CommonModule, FontAwesomeModule],

  declarations: [CommonComponent, NavbarComponent, NavbarComponent],
  exports: [CommonComponent, FontAwesomeModule, NavbarComponent]
})
export class SharedModule {
}
