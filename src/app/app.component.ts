import { CharClass } from './models/CharClass';
import { CharClassService } from './services/char-class.service';
import { User } from './models/User';
import { Component } from '@angular/core';
import { Race } from './models/Race';
import { RaceService } from './services/race-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dungeons and Dragons Helper';

  // make it public so other components(like our login component can toggle on/off)
  public isLoggedIn: boolean = false;
  public user: User = new User('', '', '');

  username: string = '';

  classes: CharClass[] = []
  races: Race[] = []
  constructor(private classServ: CharClassService, private raceServ: RaceService) {}

  ngOnInit() {
    this.classes = this.classServ.findAllCharClasses()
    this.races = this.raceServ.findAllRaces()
  }
  // update the username (user info) based on whoever is stored in the session
  updateUserData(username: string): void {
    this.username = username;
  }

  // flush the browser's session
  signOut(): void {
    this.isLoggedIn = false;
    window.location.reload();

    // NgRx is state mgmt for Angular
    // could clear browser storage session
  }
}