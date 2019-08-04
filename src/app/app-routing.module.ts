import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : './authorization/authorization.module#AuthorizationModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate : [AuthGuardService]
  },
  {
    path: '',
    loadChildren: './authorization/authorization.module#AuthorizationModule',
    canActivate : [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
