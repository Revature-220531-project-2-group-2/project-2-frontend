import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/Character';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  char: Character = new Character(0, '', '', '', 0, 0, 0, 0, 0, 0, [], []);
  clientMessage: ClientMessage = new ClientMessage('');
  path: any;
  username: string = '';

  constructor(private charService: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.path = this.router.url;
    let arrCharPath: any = this.path.split('/');
    this.username = arrCharPath[arrCharPath.length - 1]
    console.log(this.username);

  }

  ngOnInit(): void {
  }

  createCharacter(): void {
    this.charService.createCharacter(this.username, this.char)
      .subscribe(


        data => {
          console.log(data);
          this.clientMessage.message = `Successfully Created Character!`
        },
        error => this.clientMessage.message = `Something went wrong.  Error ${error}`
      )

  }

  /*    Form Controls   */
  strengthMessage: ClientMessage = new ClientMessage('');
  strengthAmt: number = 0;
  strengthInvalid: boolean = false;

  dexterityMessage: ClientMessage = new ClientMessage('');
  dexterityAmt: number = 0;
  dexterityInvalid: boolean = false;

  constitutionMessage: ClientMessage = new ClientMessage('');
  constitutionAmt: number = 0;
  constitutionInvalid: boolean = false;

  intelligenceMessage: ClientMessage = new ClientMessage('');
  intelligenceAmt: number = 0;
  intelligenceInvalid: boolean = false;

  wisdomMessage: ClientMessage = new ClientMessage('');
  wisdomAmt: number = 0;
  wisdomInvalid: boolean = false;

  charismaMessage: ClientMessage = new ClientMessage('');
  charismaAmt: number = 0;
  charismaInvalid: boolean = false;

  /*   End Form Controls   */

  getStrengthValue(event: Event): number {
    let theNum: number = Number((event.target as HTMLInputElement).value);
    if (theNum < 3 || theNum > 20) {
      theNum = 3;
      this.strengthInvalid = true;
      this.strengthMessage.message = `Input must be between 3 and 20`

    } else {
      this.strengthInvalid = false;
      this.strengthMessage.message = '';
    }

    return theNum;
  }

  getDexterityValue(event: Event): number {
    let theNum: number = Number((event.target as HTMLInputElement).value);
    if (theNum < 3 || theNum > 20) {
      theNum = 3;
      this.dexterityInvalid = true;
      this.dexterityMessage.message = `Input must be between 3 and 20`

    } else {
      this.dexterityInvalid = false;
      this.dexterityMessage.message = '';
    }

    return theNum;
  }

  getConstitutionValue(event: Event): number {
    let theNum: number = Number((event.target as HTMLInputElement).value);
    if (theNum < 3 || theNum > 20) {
      theNum = 3;
      this.constitutionInvalid = true;
      this.constitutionMessage.message = `Input must be between 3 and 20`

    } else {
      this.constitutionInvalid = false;
      this.constitutionMessage.message = '';
    }

    return theNum;
  }

  getIntelligenceValue(event: Event): number {
    let theNum: number = Number((event.target as HTMLInputElement).value);
    if (theNum < 3 || theNum > 20) {
      theNum = 3;
      this.intelligenceInvalid = true;
      this.intelligenceMessage.message = `Input must be between 3 and 20`

    } else {
      this.intelligenceInvalid = false;
      this.intelligenceMessage.message = '';
    }

    return theNum;
  }

  getWisdomValue(event: Event): number {
    let theNum: number = Number((event.target as HTMLInputElement).value);
    if (theNum < 3 || theNum > 20) {
      theNum = 3;
      this.wisdomInvalid = true;
      this.wisdomMessage.message = `Input must be between 3 and 20`

    } else {
      this.wisdomInvalid = false;
      this.wisdomMessage.message = '';
    }

    return theNum;
  }

  getCharismaValue(event: Event): number {
    let theNum: number = Number((event.target as HTMLInputElement).value);
    if (theNum < 3 || theNum > 20) {
      theNum = 3;
      this.charismaInvalid = true;
      this.charismaMessage.message = `Input must be between 3 and 20`

    } else {
      this.charismaInvalid = false;
      this.charismaMessage.message = '';
    }

    return theNum;
  }



}
