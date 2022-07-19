import { Component, Inject, OnInit } from '@angular/core';
import { ClientMessage } from './../../models/ClientMessage';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = ''
  password: string = ''
  clientMessage: ClientMessage = new ClientMessage('');
  loginErrMsg: string = '';
  isLoading: boolean = false;
  loginUrl: string = '/login'

  constructor(
    private authService: AuthService,
    private appComponent: AppComponent,
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router) { }

  onNoClick(): void {
  }

  onClick(): void {
    this.login();


  }

  // pass thru the username & string from the template,
  // and call teh auth service
  login() {



    // first check for empty values
    if (!this.username.trim() || !this.password.trim()) {
      this.loginErrMsg = 'Failed Login';

      return;
    }

    // call the authService to hit the /login endpoint
    this.isLoading = true;
    this.authService.login(this.username, this.password)
      .subscribe(
        // if we're successful, this is the callback that's invoked

        (response) => {
          this.isLoading = false;

          // build a token that we capture fromt he response headers (from Spring)
          const token = response.headers.get('rolodex-token');

          // using the browser's session to store session info
          sessionStorage.setItem('token', token);

          // pass the property that the user is logged in to the root component
          this.appComponent.isLoggedIn = true;
          this.appComponent.username = response.body.username;
          this.router.navigate(['login/profile'])


          console.log(this.appComponent.username);

          // send User object back to app.component

        },
        (error) => {
          this.isLoading = false;
          this.clientMessage.message = `Soemthing went wrong Error ${error}`;

        }
      );

    // clear the input fields
    this.username = '';
    this.password = '';
  }

}


