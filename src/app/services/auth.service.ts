import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  userData: any;
  isAuthenticate = false;

  saveData(userData){
    // return this.httpClient.post('http://x-workz.mj.milesweb.cloud/v1/save', userData);
    sessionStorage.setItem( 'user' , JSON.stringify(userData));
  }

  checkLogin(username , password){
    this.userData = JSON.parse(sessionStorage.getItem('user'));
    if(username === this.userData.email && password === this.userData.password){
      this.isAuthenticate = true;
      console.log(this.isAuthenticate);
      return true;
    } else{
      return false;
    }
  }

  isValidUser(){
    console.log(this.isAuthenticate);
    return this.isAuthenticate;
  }
}
