import { Component } from '@angular/core';
import { ClientMessage } from './../../models/ClientMessage';
import { Address } from './../../models/User';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';
  confirmPassword: string = '';
  user: User = new User(0, '', '', '');
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  registerUser(): void {
    if (this.user.password != this.confirmPassword) {
      this.clientMessage.message = `Passwords don't match`
      return;   // pw's don't match
    }
    if (!this.user.password || !this.user.email || !this.user.username || !this.confirmPassword) {
      this.clientMessage.message = `All Fields must be entered`
      return;
    }
    this.userService.registerUser(this.user)
      .subscribe(data => this.clientMessage.message = `Successfully Registered ${data.username}`, error => this.clientMessage.message = `Soemthing went wrong Error ${error}`)
  }

}
