import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../user/services/user.service";
import {Roles, User} from "../../auth/models";
import {Router} from "@angular/router";

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

  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      email: new FormControl(null, [Validators.required, emailValidator]),
      password: new FormControl(null, [Validators.required])
    });
  }

  registration() {
    if (this.form.status === "VALID") {
      const user: User = {
        id: 0,
        username: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password,
        role: Roles.user
      }
      this.userService.createUser(user);
      this.router.navigate(['login']);
    }
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
