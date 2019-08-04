import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService , private router : Router) { }

  ngOnInit() {
  }
  logout(){
    console.log("Called..................................");
    sessionStorage.removeItem('user');
    this.auth.isAuthenticate = false;
    this.router.navigate(['auth/register']);

  }

}
