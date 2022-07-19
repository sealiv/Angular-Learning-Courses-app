import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorized$) {
      return true;
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate([this.authService.getLoginUrl()]);
    return false;
  }
}
