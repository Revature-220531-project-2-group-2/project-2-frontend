import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login User';
  user: User = new User(0, '', '', '', '', '', []);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
