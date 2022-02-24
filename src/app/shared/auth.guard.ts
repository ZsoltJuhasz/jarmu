/*
 * File: auth.guard.ts
 * Authors: Juhász Zsolt
 * Copyright: 2021, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2022-02-24
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
    ) {}
  canActivate(){
    if( this.auth.isLoggedIn() ) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
