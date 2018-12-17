import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { SignupComponent }      from './signup/signup.component';
import { SigninComponent }      from './signin/signin.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ShowProfileComponent } from './profile/show-profile/show-profile.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'signup', component: SignupComponent },
 { path: 'signin', component: SigninComponent },
 { path: 'edit_profile', component: EditProfileComponent},
 { path: 'profile/:id', component: ShowProfileComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRouterModule { }
