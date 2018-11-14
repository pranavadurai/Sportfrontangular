import { Component, OnInit } from '@angular/core';

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

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  signup(name,email,password): void {
    this.userService.signup({name,email , password} as Authentication).subscribe(users => this.users = users);
  }

}
