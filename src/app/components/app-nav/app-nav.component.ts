import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.appComponent.isLoggedIn = false;
    this.appComponent.username = '';
    this.appComponent.user = new User('', '', '');;
  }

}
