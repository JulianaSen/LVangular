import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../app/Interfaces/users';
import { IContent } from '../app/Interfaces/content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _urlUsers: string = "http://127.0.0.1:5000/api/users/all";
  private _urlUserById: string = "http://127.0.0.1:5000/api/users";
  private _urlContent: string = "http://127.0.0.1:5000/api/content/all";
  private _urlContentById: string = "http://127.0.0.1:5000/api/content/id";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._urlUsers);
  }

  deleteUser(user_id): Observable<{}>  {
    return this.http.delete(this._urlUserById + "/" + user_id);
  }

  getPosts(): Observable<IContent[]> {
    return this.http.get<IContent[]>(this._urlContent);
  }

  deletePost(post_id): Observable<{}>  {
    return this.http.delete(this._urlContentById + "/" + post_id);
  }
}
