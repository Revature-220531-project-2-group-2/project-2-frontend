import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-character-sheet-tabs',
  templateUrl: './character-sheet-tabs.component.html',
  styleUrls: ['./character-sheet-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterSheetTabsComponent implements OnInit {

  @Input() charisma: number | undefined;

  constructor() {
    console.log(this.charisma + 'Here\n\n');

  }

  ngOnInit(): void {


  }

}
