import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  isAdded:boolean = false;
  public posts = [];

  type_content: string;
  name: string;
  destination: string;
  smoking: boolean;
  wi_fi: boolean;
  description: string;
  rating: number;
  mobile_phone: number;
  image: string;
  price: number;
  whatIsIt: string;

  checkHotel() {
    return this.type_content == "hotel";
  }

  checkRestaurant() {
    return this.type_content == "restaurant";
  }

  checkEntertainment() {
    return this.type_content == "entertainment";
  }

  public newPost = {
    type_content: "",
    name: "",
    smoking: false,
    wi_fi: false,
    description: "",
    rating: 0,
    mobile_phone: 0,
    image: "",
    price: 0,
    destination: "",
    whatIsIt: ""
  };

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
  
  createPost() {
    this.newPost.type_content = this.type_content;
    this.newPost.name = this.name;
    this.newPost.smoking = JSON.parse(this.smoking.toString());
    this.newPost.wi_fi = JSON.parse(this.wi_fi.toString());
    this.newPost.description = this.description;
    this.newPost.rating = this.rating;
    this.newPost.mobile_phone = this.mobile_phone;
    this.newPost.image = this.image;
    this.newPost.price = this.price;
    this.newPost.destination = this.destination;
    this.newPost.whatIsIt = this.whatIsIt;

    this._usersService.addPost(this.newPost)
      .subscribe(()=> {
        this.showPosts();
    });
  }

  ngOnInit() {
    this.showPosts();
  }
}
