import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  isAdded:boolean = false;
  //userNames:string[];
  //passwords:string[];
  public users = {};

  constructor(private _usersService: UsersService) { }

  showForm() {
    this.isAdded = !this.isAdded;
  }

  // displayUsers() {
  //   let userName = [];
  //   let password = [];
  //   for (var i = 0; i < localStorage.length; i++) {
  //     userName[i] = localStorage.key(i);
  //     password[i] = localStorage.getItem(userName[i]);
  //   }
  //   this.userNames = userName;
  //   this.passwords = password;
  // }

  addUser(userName, password) {
    localStorage.setItem(userName, password);
  }

  // deleteUser(userName) {
  //   localStorage.removeItem(userName);
  //   this.displayUsers();
  // }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(data => this.users = data);
  }
}