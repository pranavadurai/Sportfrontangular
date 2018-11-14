import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from '../service/user.service';

import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: User;
  //headers: String[]; 
  error:string;

  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
     if(this.cookieService.get('Auth_Token')){
        this.getUser();
     }
  }

  getUser(): void {
     this.userService.getuser().subscribe( users =>this.users = users );
    }

    //getUser(): void {
    //   this.userService.getuser().subscribe(resp => {
    //    const keys = resp.headers.keys();
  //      this.headers = keys.map(key =>
  //        '${key}: ${resp.headers.get(key)}');
  //      console.log(resp);
  //      this.users = { ... resp.body };
  //    });
  //    }

}
