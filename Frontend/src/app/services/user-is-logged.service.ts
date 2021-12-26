import { UserData, UserIsLoggedData } from './../models/users.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIsLoggedService {

  baseURLUserIsLoggedData = 'http://localhost:3000/user';

  constructor( private http : HttpClient) { }

  userIsLogged: UserIsLoggedData;

  getUserIsLoggedAll () {
    return this.http.get<Array<UserIsLoggedData>>(this.baseURLUserIsLoggedData)
  }


  getUserIsLoggedEntry( id ) {
    return this.http.get<UserIsLoggedData>(this.baseURLUserIsLoggedData + "/" + id)
  }

  registerUserIsLogged = (user: UserData) => {
    return this.http.post<UserIsLoggedData>(this.baseURLUserIsLoggedData, {
      "username": user.username,
      "password": user.password
    });
  };

  deleteUserIsLogged( id ){
    return this.http.delete(this.baseURLUserIsLoggedData + "/" + id)
  }

  editEntryUserIsLogged = (user: UserIsLoggedData) => {
    return this.http.put(this.baseURLUserIsLoggedData + '/' + user.id, {
      "userId": user.userId,
      "username": user.username,
      "password": user.password,
      "userislogged": user.userislogged
    });
  };


}
