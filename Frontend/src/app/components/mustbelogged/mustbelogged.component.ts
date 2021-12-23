import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mustbelogged',
  templateUrl: './mustbelogged.component.html',
  styleUrls: ['./mustbelogged.component.css']
})
export class MustbeloggedComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
