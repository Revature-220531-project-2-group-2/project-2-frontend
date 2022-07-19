import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Character } from 'src/app/models/Character';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  charId: number = 0;
  characters: Character[] = [];
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(private charService: CharacterService, public appComponent: AppComponent, private router: Router) { 
    if(!this.appComponent.isLoggedIn) {
      this.router.navigateByUrl('/')
    }
  }

  findCharacters() {
    console.log(this.appComponent.username);

    this.charService.findAllCharactersBelongingToUser(this.appComponent.username)
      .subscribe(data => {
        this.characters = data;
        this.clientMessage.message = '';
      },
        // rejection callback in the case it doesn't work out
        () => this.clientMessage.message = `Can't find the Characters belonging to User with username ${this.appComponent.username}`
      );
  }

  viewCampaigns() {
    this.router.navigate(['campaigns'])
  }

}
