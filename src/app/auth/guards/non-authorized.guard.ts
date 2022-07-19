import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class NonAuthorizedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorized$) {
      this.authService.setRedirectUrl(url);
      this.router.navigate(['courses']);
      return false;
    }
    return true;
  }
}
