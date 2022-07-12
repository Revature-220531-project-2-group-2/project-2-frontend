import { Component, OnInit } from '@angular/core';
import { ClientMessage } from './../../models/ClientMessage';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private authService: AuthService, private appComponent: AppComponent) { }

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

          // update userdata on the screen (to be seen by other components)
          this.appComponent.updateUserData(response.body.username)
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
