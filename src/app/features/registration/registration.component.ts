import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../shared/components/shared.style.css']
})
export class RegistrationComponent implements OnInit {

  btnText = 'Registration';
  hasError = false;
  hasError1 = false;
  hasError2 = false;
  hasError3 = false;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(null, [Validators.required, emailValidator]),
      password: new FormControl(null, [Validators.required])
    });
  }

  registration() {
    if (this.form.status === "VALID") {
      console.log('new User with email: ' + this.form.value.email + ' was registered.');
    }
  }

  getErrors():boolean {
    return (this.hasError || this.hasError1) || this.hasError2 || this.hasError3;
  }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}

function emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value != null && control.value != '') {
    let res = control.value.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
    if (res != null && res.length > 0) {
      return null;
    }
  }
  return { 'email': true };
}
