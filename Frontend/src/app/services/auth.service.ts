import { Router } from '@angular/router';
import { UserData } from './../models/users.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {
  
  public isLoggedIn$: BehaviorSubject<boolean>;
  public userLogged$: string;

  usernameInput: string;
  passwordInput: string;



  admin: UserData = {
    id: 1,
    username: "root",
    password: "root"
  }

  pippo: UserData = {
    id: 2,
    username: "pippo",
    password: "pippo2"
  }

  users: UserData[] = [this.admin, this.pippo];



  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
    const LoggedUser = localStorage.getItem('loggedUser');
    this.userLogged$ = LoggedUser;

  }

  login() {
    if (this.usernameInput != null && this.passwordInput != null) {
      if (this.searchInsideArray(this.usernameInput, this.passwordInput)) {

        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('loggedUser', this.usernameInput);
        this.isLoggedIn$.next(true);
        window.location.reload();


      }
    }

  }

  logout() {
    // logic
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('loggedUser', '');
    this.isLoggedIn$.next(false);
  }

  searchInsideArray(username: string, password: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (username == this.users[i].username && password == this.users[i].password) {
        return true;
      }
    }
    return false;
  }
}
