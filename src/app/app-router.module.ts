import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { SignupComponent }   from './signup/signup.component';
import { SigninComponent }  from './signin/signin.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'signup', component: SignupComponent },
 { path: 'signin', component: SigninComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRouterModule { }
