import { UserData, UserIsLoggedData } from './../models/users.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'http://localhost:3000/user';

  constructor( private http : HttpClient) { }

  getAll () {
    return this.http.get<Array<UserData>>(this.baseURL)
  }


  getEntry( id ) {
    return this.http.get<UserData>(this.baseURL + "/" + id)
  }

  register = (user: UserData) => {
    return this.http.post<UserData>(this.baseURL, {
      "username": user.username,
      "password": user.password
    });
  };

  delete( id ){
    return this.http.delete(this.baseURL + "/" + id)
  }

  editEntry = (user: UserData) => {
    return this.http.put(this.baseURL + '/' + user.id, {
      "username": user.username,
      "password": user.password
    });
  };


}
