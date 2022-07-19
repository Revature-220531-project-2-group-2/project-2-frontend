import { SpellsService } from '../../../services/spells.service';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Spell } from 'src/app/models/Spell';
import { Index } from 'src/app/models/Index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  charClass!: Index
  levels: string[] = ['Cantrip', '1st-Level', '2nd-Level', '3rd-Level', '4th-Level', '5th-Level', '6th-Level', '7th-Level', '8th-Level', '9th-Level']
  spells: Spell[] = []
  search: string = ''
  clientMessage: ClientMessage = new ClientMessage('Sorry, no spells to display')

  constructor(private spellsService: SpellsService, private router : Router) {  }

  ngOnInit(): void {
    this.charClass = history.state
    this.setSpells()

  }

  setSpells(): void {
    this.spells = this.spellsService.findSpellsByClassName(this.charClass.index)
  }

  /**
   * Takes in a level as a number and sets filteredSpells to only spells of that level
   * @param level 
   */
  filterSpellsByLevel(level: number): Spell[] {
    return this.spells.filter(s => s.level == level)
  }

  routeToSpell(s: Spell): void {
    console.log("routing to spell")
    this.router.navigateByUrl('/spell', { state: s });
  }

}
