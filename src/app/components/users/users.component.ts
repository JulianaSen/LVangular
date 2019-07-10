import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  isAdded:boolean = false;
  public users = {};

  constructor(private _usersService: UsersService) { }

  showForm() {
    this.isAdded = !this.isAdded;
  }

  showUsers() {
    this._usersService.getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(user_id) {
    return this._usersService.deleteUser(user_id)
      .subscribe(()=> {
        this.showUsers();
    });
  }

  ngOnInit() {
    this.showUsers();
  }
}