import { AppComponent } from 'src/app/app.component';
import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Character } from 'src/app/models/Character';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faCheck, faX, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit, OnChanges {
  path: any;

  clientMessage: ClientMessage = new ClientMessage('');
  char: Character = new Character(0, '', '', '', 0, 0, 0, 0, 0, 0, [], []);

  modifierBonus: number[] = [-5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

  username: string = '';
  faPlusCircle = faPlusCircle;
  faPlusCircle2 = faPlusCircle;
  faCheck = faCheck;
  faMinusCircle = faMinusCircle
  faMinusCircle2 = faMinusCircle
  faX = faX;
  additionalEquipment: string = '';
  additionalSpells: string = '';
  @Input() addSpells: boolean = false;
  @Input() addEquipment: boolean = false;







  constructor(private charService: CharacterService, private profile: UserDashboardComponent, private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent, private elmentRef: ElementRef) {
    this.path = this.router.url;
    let arrCharPath: any = this.path.split('/');


    this.char.charName = arrCharPath[arrCharPath.length - 1]
    this.getCharAttributes();




  }

  addAdditionalSpells() {
    this.char.spells.push(this.additionalSpells);
    this.charService.putCharacter(this.appComponent.username, this.char)
      .subscribe(


        data => {
          this.clientMessage.message = `Successfully Created Character!`
        },
        error => this.clientMessage.message = `Something went wrong.  Error ${error}`
      )
    this.additionalEquipment = '';
  }



  addAdditionalEquipment() {
    this.char.equipment.push(this.additionalEquipment);
    this.charService.putCharacter(this.appComponent.username, this.char)
      .subscribe(
        data => {
          console.log(data);
          this.clientMessage.message = `Successfully Created Character!`
        },
        error => this.clientMessage.message = `Something went wrong.  Error ${error}`
      )
    this.additionalEquipment = '';
  }

  flipAddSpells() {
    this.addSpells = !this.addSpells;
    if (this.addSpells) {
      this.faPlusCircle = this.faMinusCircle;
    } else {
      this.faPlusCircle = faPlusCircle;
    }
  }

  flipAddEquipment() {
    this.addEquipment = !this.addEquipment;
    if (this.addEquipment) {
      this.faPlusCircle2 = this.faMinusCircle2;
    } else {
      this.faPlusCircle2 = faPlusCircle;
    }
  }

  getCharAttributes() {
    this.username = this.appComponent.username;

    this.charService.findCharByUsernameAndName(this.appComponent.username, this.char.charName)
      .subscribe(
        data => {
          console.log(data);

          this.char = data;
          console.log(this.char);
          this.clientMessage.message = '';


        },
        () => this.clientMessage.message = `Can't find Character with Username + id=${this.char.charName}`
      )

  }




  attributeHasFocus: boolean = false;

  displaySave() {
    this.attributeHasFocus = true;
    console.log('here');

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.attributeHasFocus = false;


  }

}
