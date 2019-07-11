import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../app/Interfaces/users';
import { IContent } from '../app/Interfaces/content';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _urlUsers: string = "http://127.0.0.1:5000/api/users/all";
  private _urlUserById: string = "http://127.0.0.1:5000/api/users";
  private _urlAddUser:string = "http://127.0.0.1:5000/api/users/register/new_user";

  private _urlContent: string = "http://127.0.0.1:5000/api/content/all";
  private _urlContentById: string = "http://127.0.0.1:5000/api/content/id";
  private _urlAddPost:string = "http://127.0.0.1:5000/api/content/new_post";
  

  constructor(private http: HttpClient) { }

  //users
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._urlUsers);
  }

  deleteUser(user_id): Observable<{}>  {
    return this.http.delete(this._urlUserById + "/" + user_id);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._urlAddUser, JSON.stringify(user), httpOptions);
  }

  //posts
  getPosts(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this._urlContent);
  }

  deletePost(post_id): Observable<{}>  {
    return this.http.delete(this._urlContentById + "/" + post_id);
  }

  addPost(post: IContent): Observable<IContent> {
    return this.http.post<IContent>(this._urlAddPost, JSON.stringify(post), httpOptions);
  }
}
