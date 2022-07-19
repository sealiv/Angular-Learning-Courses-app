import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';
import {Roles} from "../../auth/models";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): boolean {
    const loggedInUser = this.userService.getUser(url.split('/')[0]);

    return loggedInUser.role === Roles.admin;
  }
}
