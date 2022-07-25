import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';
import {Roles} from "../../auth/models";
import {AuthService} from "../../auth/services/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): boolean {
    return this.authService.getUser().role === Roles.admin;
  }
}
