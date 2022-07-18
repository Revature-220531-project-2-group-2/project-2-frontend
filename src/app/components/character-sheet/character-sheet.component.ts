import { AppComponent } from 'src/app/app.component';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  charId: number = 0;
  clientMessage: ClientMessage = new ClientMessage('');
  char: Character = new Character(0, '', '', '', 0, 0, 0, 0, 0, 0, [], []);
  value: String = '';
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


  strengthAbilityModifier: number = 0;
  dexterityAbilityModifier: number = 0;
  constitutionAbilityModifier: number = 0;
  intelligenceAbilityModifier: number = 0;
  wisdomAbilityModifier: number = 0;
  charismaAbilityModifier: number = 0;


  constructor(private charService: CharacterService, private profile: UserDashboardComponent, private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) {
    this.path = this.router.url;
    let arrCharPath: any = this.path.split('/');


    this.charId = arrCharPath[arrCharPath.length - 1]
    console.log(this.charId);
    this.getCharAttributes();
  }

  addAdditionalSpells() {
    this.char.spells.push(this.additionalSpells);
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

    this.charService.findCharByUsernameAndId(this.appComponent.username, this.charId)
      .subscribe(
        data => {
          console.log(data);

          this.char = data;
          console.log(this.char);
          this.assignAbilityModifiers();
          this.clientMessage.message = '';
        },
        () => this.clientMessage.message = `Can't find Character with Username + id=${this.charId}`
      )

  }

  calculateAbilityScoreModifiers(score: number): number {
    if (score <= 1) { return -5 }
    if (score <= 3) { return -4 }
    if (score <= 5) { return -3 }
    if (score <= 7) { return -2 }
    if (score <= 9) { return -1 }
    if (score <= 11) { return 0 }
    if (score <= 13) { return 1 }
    if (score <= 15) { return 2 }
    if (score <= 17) { return 3 }
    if (score <= 19) { return 4 }
    if (score <= 21) { return 5 }
    if (score <= 23) { return 6 }
    if (score <= 25) { return 7 }
    if (score <= 27) { return 8 }
    if (score <= 29) { return 9 }
    else {
      return 10;
    }
  }

  assignAbilityModifiers(): void {
    this.strengthAbilityModifier = this.calculateAbilityScoreModifiers(this.char.strength);
    this.dexterityAbilityModifier = this.calculateAbilityScoreModifiers(this.char.strength);
    this.constitutionAbilityModifier = this.calculateAbilityScoreModifiers(this.char.strength);
    this.intelligenceAbilityModifier = this.calculateAbilityScoreModifiers(this.char.strength);
    this.wisdomAbilityModifier = this.calculateAbilityScoreModifiers(this.char.strength);
    this.charismaAbilityModifier = this.calculateAbilityScoreModifiers(this.char.strength);


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
