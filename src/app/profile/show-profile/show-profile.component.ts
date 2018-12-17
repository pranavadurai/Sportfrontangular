import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../service/user.service';
import { ProfileService } from '../../service/profile.service';

import { User } from '../../model/User';
import { Profile } from '../../model/Profile';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  users: User;
  show_user: User;
  profile: Profile;
  image_url: any;

  constructor(private userService: UserService, private profileService: ProfileService, private cookieService: CookieService,private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.cookieService.get('Auth_Token')){
      this.getUser();
      this.get_show_user();
    }
  }

  getUser(): void {
    this.userService.getuser().subscribe( users => { this.users = users;});
  }

  get_show_user(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id).subscribe( user => { this.show_user = user;this.profile = this.show_user.profile; this.image_url = "http://localhost:3000"+user.avatarUrl});
  }

}
