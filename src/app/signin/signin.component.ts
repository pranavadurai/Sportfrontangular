import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../service/user.service';

import { User } from '../model/User';
import { Authentication } from '../model/Authentication';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  users: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signin(email:string,password:string): void {
    console.log("wjenfwef");
    this.userService.signin({email , password} as Authentication).subscribe(users => this.users = users);
  }

}
