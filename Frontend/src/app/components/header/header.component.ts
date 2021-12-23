import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  menuIcon = '☰';
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleNav() {
    this.isCollapsed = !this.isCollapsed;
    console.log(`Botton menu clicked`);
    !this.isCollapsed ? this.menuIcon = '✖' : this.menuIcon = '☰';
    return this.isCollapsed;
  }

}
