/*
 * File: auth.service.ts
 * Authors: Juhász Zsolt
 * Copyright: 2021, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2021-12-07
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */

import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:8000/api/'
  constructor(private http: HttpClient) {}
  login(username:string,password:string){
    let endpoint = 'login';
    let url = this.host + endpoint;
    let authData = {
      name: username,
      password: password
    }
    let data = JSON.stringify(authData);
    let headerObj = new HttpHeaders({
      'Content-Type':'application/json'
    })
    let header = {
      headers: headerObj
    }
      return this.http.post<any>(url,data,header);
  }
  register(username:string,email:string,password:string){
    let endpoint = 'register';
    let url = this.host + endpoint;
    let authData = {
      name: username,
      email: email,
      password: password,
      password_confirmation: password
    }
    let data = JSON.stringify(authData);
    let headerObj = new HttpHeaders({
      'Content-Type':'application/json'
    })
    let header = {
      headers: headerObj
    }
      return this.http.post<any>(url,data,header);
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser') === null) {
      return false;
    }    
    let data:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(data);
    let token = currentUser.token;
    return token;
  }
}