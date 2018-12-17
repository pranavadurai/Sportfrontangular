import { Component, OnInit } from '@angular/core';
import { AuthService,FacebookLoginProvider,GoogleLoginProvider } from 'angular5-social-auth';

import { UserService } from '../service/user.service';

import { User } from '../model/User';
import { Authentication } from '../model/Authentication';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  users: User;

  constructor(private userService:UserService,private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  signup(name,email,password): void {
    this.userService.signup({name,email , password} as Authentication).subscribe(users => this.users = users);
  }

  fb_login(name,email,password,provider): void {
    console.log("Facebook log in initiated");
    this.userService.fb_login_auth({name,email,password,provider} as Authentication).subscribe(users => this.users = users);
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.fb_login(userData.name, userData.email, userData.token.substring(0,100), userData.provider);
      }
    );
  }

}
