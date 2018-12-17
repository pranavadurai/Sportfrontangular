import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from '../../service/user.service';
import { ProfileService } from '../../service/profile.service';

import { User } from '../../model/User';
import { Profile } from '../../model/Profile';

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {

  users: User;
  profile: Profile;

  imagesrc: string;

  constructor(private userService: UserService, private cookieService: CookieService, private profileService: ProfileService) { }

  ngOnInit() {
    if(this.cookieService.get('Auth_Token')){
       this.getUser();
    }
  }

  getUser(): void {
    this.userService.getuser().subscribe( users =>{
                                                  this.users = users;
                                                  this.profile = this.users.profile });
    }

  update_profile(profile: Profile): void {
    this.profileService.update_profile(profile).subscribe( profile => this.profile = profile)
  }

  readURL(event: HTMLInputEvent) : void {
    if(event.target.files && event.target.files[0]){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e =>{ this.imagesrc  = reader.result; this.profile.avatar = reader.result;  }
      reader.readAsDataURL(file);
    }
  }

}
