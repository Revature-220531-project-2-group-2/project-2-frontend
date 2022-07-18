import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */


@Component({
  selector: 'register-modal',
  templateUrl: 'register-modal.component.html',
})
export class RegisterModalComponent {

  title = 'Register User';
  confirmPassword: string = '';
  user: User = new User('', '', '');
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private userService: UserService,
    private appComponent: AppComponent
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.registerUser();
    this.dialogRef.close();
  }

  registerUser(): void {
    if (this.user.pwd != this.confirmPassword) {
      this.clientMessage.message = `Passwords don't match`
      return;   // pw's don't match
    }
    if (!this.user.pwd || !this.user.email || !this.user.username || !this.confirmPassword) {
      this.clientMessage.message = `All Fields must be entered`
      return;
    }
    this.userService.registerUser(this.user)
      .subscribe(data => {
        this.clientMessage.message = `Successfully Registered ${data.username}`;
        // pass the property that the user is logged in to the root component
        this.appComponent.isLoggedIn = true;

        // need to redirect/do something here
      }, error => this.clientMessage.message = `Soemthing went wrong Error ${error}`)
  }
}
