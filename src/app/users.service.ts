import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _urlUsers: string = "http://127.0.0.1:5000/api/users";
  //private _urlUsers: string = "/assets/users.json";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._urlUsers);
  }
}
