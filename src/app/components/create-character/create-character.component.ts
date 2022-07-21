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
    this.clientMessage.message = 'Ready for Dice Rolls!'
  }

  ngOnInit(): void {
  }

  /* Code that calculates and assigns attribute values based on dice rolls */
  /********************  Start of diceroll calculations *******************/
  /* Initializing member variables */
  strengthDiceRolls: number = 0;
  strengthDiceRollsArray: number[] = [];
  dexterityDiceRolls: number = 0;
  dexterityDiceRollsArray: number[] = [];
  constitutionDiceRolls: number = 0;
  constitutionDiceRollsArray: number[] = [];
  intelligenceDiceRolls: number = 0;
  intelligenceDiceRollsArray: number[] = [];
  wisdomDiceRolls: number = 0;
  wisdomDiceRollsArray: number[] = [];
  charismaDiceRolls: number = 0;
  charismaDiceRollsArray: number[] = [];

  /* Could refactor code later to be more dry */
  diceRollStrength(): void {
    // check if we can still roll
    if (this.strengthDiceRolls < 4) {
      let diceVal: number = this.diceRoll();
      this.strengthDiceRollsArray.push(diceVal);


      this.strengthDiceRolls++;
      if (this.strengthDiceRolls == 4) {
        this.calculateStrength();
        this.clientMessage.message = `${diceVal} was a dice roll for Strength! Final value is ${this.strengthAmt}`
      }
      else {

        this.clientMessage.message = `${diceVal} was a dice roll for Strength! ${4 - this.strengthDiceRolls} remaining`
      }
    }
  }

  calculateStrength(): void {
    this.removeMinValInArray(this.strengthDiceRollsArray);
    console.log(this.strengthDiceRollsArray);
    this.strengthAmt = this.calculateSumOfArray(this.strengthDiceRollsArray);
    this.char.strength = this.strengthAmt;
    console.log(this.strengthAmt);

  }

  diceRollDexterity(): void {
    // check if we can still roll
    if (this.dexterityDiceRolls < 4) {
      let diceVal: number = this.diceRoll();
      this.dexterityDiceRollsArray.push(diceVal);


      this.dexterityDiceRolls++;
      if (this.dexterityDiceRolls == 4) {
        this.calculateDexterity();
        this.clientMessage.message = `${diceVal} was a dice roll for Dexterity! Final Value is ${this.dexterityAmt}`
      }
      else {

        this.clientMessage.message = `${diceVal} was a dice roll for Dexterity! ${4 - this.dexterityDiceRolls} remaining`
      }
    }
  }

  calculateDexterity(): void {
    this.removeMinValInArray(this.dexterityDiceRollsArray);
    console.log(this.dexterityDiceRollsArray);
    this.dexterityAmt = this.calculateSumOfArray(this.dexterityDiceRollsArray);
    this.char.dexterity = this.dexterityAmt;
    console.log(this.dexterityAmt);

  }

  diceRollConstitution(): void {
    // check if we can still roll
    if (this.constitutionDiceRolls < 4) {
      let diceVal: number = this.diceRoll();
      this.constitutionDiceRollsArray.push(diceVal);

      this.constitutionDiceRolls++;
      if (this.constitutionDiceRolls == 4) {
        this.calculateConstitution();
        this.clientMessage.message = `${diceVal} was a dice roll for Constitution! Final Value is ${this.constitutionAmt}`
      }
      else {
        this.clientMessage.message = `${diceVal} was a dice roll for Constitution! ${4 - this.constitutionDiceRolls} remaining`
      }
    }
  }

  calculateConstitution(): void {
    this.removeMinValInArray(this.constitutionDiceRollsArray);
    console.log(this.constitutionDiceRollsArray);
    this.constitutionAmt = this.calculateSumOfArray(this.constitutionDiceRollsArray);
    this.char.constitution = this.constitutionAmt;
    console.log(this.constitutionAmt);
  }

  diceRollIntelligence(): void {
    // check if we can still roll
    if (this.intelligenceDiceRolls < 4) {
      let diceVal: number = this.diceRoll();
      this.intelligenceDiceRollsArray.push(diceVal);
      this.intelligenceDiceRolls++;
      if (this.intelligenceDiceRolls == 4) {

        this.calculateIntelligence();
        this.clientMessage.message = `${diceVal} was a dice roll for Intelligence! Final value is ${this.intelligenceAmt}`
      }
      else {
        this.clientMessage.message = `${diceVal} was a dice roll for Intelligence! ${4 - this.intelligenceDiceRolls} remaining`
      }
    }
  }

  calculateIntelligence(): void {
    this.removeMinValInArray(this.intelligenceDiceRollsArray);
    console.log(this.intelligenceDiceRollsArray);
    this.intelligenceAmt = this.calculateSumOfArray(this.intelligenceDiceRollsArray);
    this.char.intelligence = this.intelligenceAmt;
    console.log(this.intelligenceAmt);
  }

  diceRollWisdom(): void {
    // check if we can still roll
    if (this.wisdomDiceRolls < 4) {
      let diceVal: number = this.diceRoll();
      this.wisdomDiceRollsArray.push(diceVal);

      this.wisdomDiceRolls++;
      if (this.wisdomDiceRolls == 4) {
        this.calculateWisdom();
        this.clientMessage.message = `${diceVal} was a dice roll for Wisdom! Final value is ${this.wisdomAmt}`
      } else {
        this.clientMessage.message = `${diceVal} was a dice roll for Wisdom! ${4 - this.wisdomDiceRolls} remaining`
      }
    }
  }

  calculateWisdom(): void {
    this.removeMinValInArray(this.wisdomDiceRollsArray);
    console.log(this.wisdomDiceRollsArray);
    this.wisdomAmt = this.calculateSumOfArray(this.wisdomDiceRollsArray);
    this.char.wisdom = this.wisdomAmt;
    console.log(this.wisdomAmt);
  }

  diceRollCharisma(): void {
    // check if we can still roll
    if (this.charismaDiceRolls < 4) {
      let diceVal: number = this.diceRoll();
      this.charismaDiceRollsArray.push(diceVal);

      this.charismaDiceRolls++;
      if (this.charismaDiceRolls == 4) {
        this.calculateCharisma();
        this.clientMessage.message = `${diceVal} was a dice roll for Charisma! Final Value is ${this.charismaAmt}`
      }
      else {
        this.clientMessage.message = `${diceVal} was a dice roll for Charisma! ${4 - this.charismaDiceRolls} remaining`
      }
    }
  }

  calculateCharisma(): void {
    this.removeMinValInArray(this.charismaDiceRollsArray);
    console.log(this.charismaDiceRollsArray);
    this.charismaAmt = this.calculateSumOfArray(this.charismaDiceRollsArray);
    this.char.charisma = this.charismaAmt;
    console.log(this.charismaAmt);
  }

  // can be used across diceroll attribute types
  calculateSumOfArray(arr: number[]): number {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  // can be used across diceroll attribute types
  removeMinValInArray(arr: number[]): void {
    let minIndex: number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    arr.splice(minIndex, 1);
  }

  diceRoll(): number {
    return Math.ceil(Math.random() * 6);

  }

  /********************  End of diceroll calculations *******************/

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
