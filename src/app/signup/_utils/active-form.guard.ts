import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { stat } from 'fs';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/models/signup';
import { getUserData } from '../store/selector/signup.selectors';

@Injectable({
  providedIn: 'root'
})

export class ActiveFormGuard implements CanActivate {

  constructor(
    private store: Store<Signup>
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }
}
