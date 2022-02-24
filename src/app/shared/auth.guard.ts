/*
 * File: login.component.ts
 * Authors: Juhász Zsolt
 * Copyright: 2021, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2021-12-07
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
