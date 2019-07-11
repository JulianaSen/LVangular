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
  
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  
  public newUser = {
    first_name: "",
    last_name: "",
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
    this.newUser.first_name = this.first_name;
    this.newUser.last_name = this.last_name;
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