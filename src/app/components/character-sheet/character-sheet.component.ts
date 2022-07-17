import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {
  path: any;
  charId: number = 0;
  clientMessage: ClientMessage = new ClientMessage('');
  char: Character = new Character(0, '', '', '', 0, 0, 0, 0, 0, 0, [], []);
  username: string = '';

  constructor(private charService: CharacterService, private profile: UserDashboardComponent, private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) {
    this.path = this.router.url;
    let arrCharPath: any = this.path.split('/');


    this.charId = arrCharPath[arrCharPath.length - 1]
    console.log(this.charId);
    this.getCharAttributes();
  }

  getCharAttributes() {
    this.username = this.appComponent.username;

    this.charService.findCharByUsernameAndId(this.appComponent.username, this.charId)
      .subscribe(
        data => {
          console.log(data);

          this.char = data;
          console.log(this.char);

          this.clientMessage.message = '';
        },
        () => this.clientMessage.message = `Can't find Character with Username + id=${this.charId}`
      )

  }


  ngOnInit(): void {

  }

}
