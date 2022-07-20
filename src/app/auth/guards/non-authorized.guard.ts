import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad, Route,
  Router,
  RouterStateSnapshot, UrlSegment, UrlTree
} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from "rxjs";

@Injectable()
export class NonAuthorizedGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorized) {
      alert('You are already authorised');
      this.authService.setRedirectUrl(url);
      this.router.navigate(['courses']);
      return false;
    }
    return true;
  }

  canLoad(route: Route): boolean {
    if (this.authService.isUserLogin()) {
      alert('You are already authorised');
      this.authService.setRedirectUrl(route.path);
      this.router.navigate(['courses']);
      return false;
    }
    return true;
  }
}
