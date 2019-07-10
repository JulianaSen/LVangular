import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public posts = {};
  isAdded:boolean = false;

  constructor(private _usersService: UsersService) { }

  showForm() {
    this.isAdded = !this.isAdded;
  }
  
  showPosts() {
    this._usersService.getPosts()
    .subscribe(data => this.posts = data);
  }

  deletePost(post_id){
    return this._usersService.deletePost(post_id)
      .subscribe(()=> {
        this.showPosts();
    });
  }

  // addNewPost(newPost) {
  //   this._usersService.addPost(newPost).subscribe();
  // }

  ngOnInit() {
    this.showPosts();
  }

}
