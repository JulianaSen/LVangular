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
  public newUser = {
    id: 4, 
    first_name: "julia", 
    last_name: "sen",
    username: "js",
    password_hash: "qwer"
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
    this._usersService.addUser(this.newUser).subscribe(user => this.users.push(user));
    console.log(this.users);
  }

  ngOnInit() {
    this.showUsers();
    this.createUser();
  }
}