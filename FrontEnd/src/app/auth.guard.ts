import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  public user: any;
  public isAuthorized: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    console.log('Auth Guard')
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Observable<boolean>((obs) => {
        this.user = localStorage.getItem('Username');
        if(this.user && this.user !== "") {
            this.isAuthorized = true;
        }
        if(!this.isAuthorized){
            console.error("You are not authorized, you need to be logged in!");
            this.router.navigate(['/login'])
        }
        obs.next(this.isAuthorized);
      
    });
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
