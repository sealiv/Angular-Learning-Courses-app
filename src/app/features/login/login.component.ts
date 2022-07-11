import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/components/shared.style.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  btnText = 'Login';
  hasError1 = false;
  hasError2 = false;
 
  login() {
    if (!this.getErrors()) { 
      console.log('User with email: ' + this.email);
    }
    console.log('hasError = ' + this.getErrors());
  }

  constructor() { }

  ngOnInit(): void {
  }

  getErrors():boolean {
    return this.hasError1 || this.hasError2;
  }
}