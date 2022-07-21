import { Router } from '@angular/router';
import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'register-modal',
  templateUrl: 'register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {

  @Input() pwdFocus = false;

  title = 'Register User';
  confirmPassword: string = '';
  user: User = new User('', '', '');
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(
    private userService: UserService,
    private appComponent: AppComponent,
    private router: Router
  ) { }

  printSomething() {
    console.log('here');

  }

  registerUser(): void {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (!regex.test(this.user.pwd)) {
      this.clientMessage.message = "Password must be at east eight characters long and have one number and one letter"
      return;
    }
    if (!this.user.pwd || !this.user.email || !this.user.username || !this.confirmPassword) {
      this.clientMessage.message = `All Fields must be entered`
      return;
    }
    if (this.user.pwd != this.confirmPassword) {
      this.clientMessage.message = `Passwords don't match`
      return;   // pw's don't match
    }
    this.userService.registerUser(this.user)
      .subscribe(data => {
        this.clientMessage.message = `Successfully Registered ${data.username}`;
        // pass the property that the user is logged in to the root component
        this.appComponent.isLoggedIn = true;
        this.appComponent.user = this.user;
        this.appComponent.username = this.user.username;
        this.router.navigateByUrl("/login/profile")

        // need to redirect/do something here
      }, error => this.clientMessage.message = `Something went wrong Error ${error}`)
  }
}
