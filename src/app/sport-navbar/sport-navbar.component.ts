import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../service/user.service';

import { User } from '../model/User';

@Component({
  selector: 'app-sport-navbar',
  templateUrl: './sport-navbar.component.html',
  styleUrls: ['./sport-navbar.component.css']
})
export class SportNavbarComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) {}

  ngOnInit() { }

  logout() : void{
     this.userService.logout();
  }

}
