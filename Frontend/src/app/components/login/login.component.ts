import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  anima: any;

  constructor(public authService: AuthService) {  }

  ngOnInit(): void {
  }
}
