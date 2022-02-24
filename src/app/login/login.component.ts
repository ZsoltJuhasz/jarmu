/*
 * File: login.component.ts
 * Authors: Juhász Zsolt
 * Copyright: 2022, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2022-02-24
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: [''],
      pass: ['']
    });
  }
  login() {
    let username = this.loginForm.value.user;
    let password = this.loginForm.value.pass;
    console.log(username, password);
    this.auth.login(username, password)
      .subscribe(result => {
        console.log(result.token);

        localStorage.setItem('currentUser',
          JSON.stringify({ token: result.token, name: result.name })
        );
        this.router.navigate(['vehicles']);
      }
      );
  }
}
