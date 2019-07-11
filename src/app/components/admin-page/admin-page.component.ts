import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { IContent } from 'src/app/Interfaces/content';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public posts = [];
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

<<<<<<< HEAD
  addNewPost(newPost: IContent) {
    this._usersService.addPost(newPost).
      subscribe(post => this.posts.push(post));;
  }
=======
  // addNewPost(newPost) {
  //   this._usersService.addPost(newPost).subscribe();
  // }
>>>>>>> 43d9bef7f9a773226b43c81081147e1393b83f7b

  ngOnInit() {
    this.showPosts();
  }

}
