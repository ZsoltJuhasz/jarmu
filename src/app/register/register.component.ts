/*
 * File: register.component.ts
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }
  register() {
    let username = this.registerForm.value.user;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.pass;
    this.auth.register(username, email, password)
      .subscribe(result => {
        if (result.success) {
          console.log(result.success);
          localStorage.setItem('currentUser',
            JSON.stringify({ token: result.data.token, name: result.data.name })
          );
          this.router.navigate(['vehicles']);
        } else {
          alert("A belépés sikertelen!");
        }
      });
  }
}

