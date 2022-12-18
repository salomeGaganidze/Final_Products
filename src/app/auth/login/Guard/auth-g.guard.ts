import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from '../../authService/authUserData.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGGuard implements CanActivate {
  constructor(private _authuserServ: authService, private _rouer: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('this is current route : ', route);

    if (!this._authuserServ.autorizedUser()) {
      this._rouer.navigate(['/']);
      return false;
    }
    return true;
  }
}
