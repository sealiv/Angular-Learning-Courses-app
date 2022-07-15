import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { TextareaComponent } from './components/textarea/textarea.component';
export { faTrash, faGraduationCap, faHammer, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [CommonModule, FontAwesomeModule],

  declarations: [CommonComponent, NavbarComponent, NavbarComponent, ButtonComponent, TextareaComponent],
  exports: [CommonComponent, FontAwesomeModule, NavbarComponent, ButtonComponent, TextareaComponent]
})
export class SharedModule {
}
