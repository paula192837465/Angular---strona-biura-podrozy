import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList()
  {
      this.authService.getUsersList().valueChanges().subscribe((user) => this.users =user);
      console.log(this.users);
  }
}
