import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms' ;
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private authService: AuthService, private router: Router ) { }

  msg = '';

  loginBuild = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });




  ngOnInit() {
  }

  login(){
    const res: boolean = this.authService.checkLogin(this.loginBuild.get('username').value , this.loginBuild.get('password').value);
    console.log(res);
    if (res) {
      this.router.navigate(['home']);
    } else {
      this.msg = 'Invalid username and password';
    }
  }

}
