import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../shared/components/shared.style.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  btnText = 'Login';
  name = 'a1';

  login() {
    console.log('new User with email: ' + this.email);
  }

  constructor() { }

  ngOnInit(): void {
  }
}