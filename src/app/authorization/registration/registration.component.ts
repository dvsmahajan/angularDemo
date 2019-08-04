import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private authService: AuthService , private router: Router) { }

  regUser = this.formBuilder.group({
    fName: ['', [Validators.required]],
    lName: ['', ],
    email: ['', [Validators.required, Validators.email]],
    contactNumber: [''],
    password : [''],
    confirmPassword : ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.regUser.value);
    // this.authService.saveData(this.regUser.value).subscribe(data => {
    //   console.log("data is saved. "+data);
    // },
    // response =>{
    //   console.log("response is "+response);
    // }
    // );
    this.authService.saveData(this.regUser.value);
    this.router.navigate(['/auth/login']);
  }
}
