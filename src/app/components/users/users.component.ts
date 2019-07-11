import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  isAdded:boolean = false;
  public users = [];
  
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  
  public newUser = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  };

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

  createUser() {
    this.newUser.firstName = this.firstName;
    this.newUser.lastName = this.lastName;
    this.newUser.username = this.username;
    this.newUser.password = this.password;

    this._usersService.addUser(this.newUser)
      .subscribe(()=> {
        this.showUsers();
      });
  }

  ngOnInit() {
    this.showUsers();
  }
}