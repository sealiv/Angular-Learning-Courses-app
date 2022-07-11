import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../shared/components/shared.style.css']
})
export class RegistrationComponent implements OnInit {

  email: string = '';
  password: string = '';
  name: string = '';
  btnText = 'Registration';
  hasError = false;
  hasError1 = false;
  hasError2 = false;
  hasError3 = false;

  registration() {
    if (!this.getErrors()) { 
      console.log('new User with email: ' + this.email + ' try to registrate.');
    }
    console.log('hasError = ' + this.getErrors());
  }
  
  getErrors():boolean {
    return (this.hasError || this.hasError1) || this.hasError2 || this.hasError3;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
