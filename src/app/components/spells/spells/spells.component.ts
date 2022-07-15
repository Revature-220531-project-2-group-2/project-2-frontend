import { SpellsService } from '../../../services/spells.service';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Spell } from 'src/app/models/Spell';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  title = 'Spells'
  spells: Spell[] = []
  filteredSpells: Spell[] = this.spells
  search: string = ''
  clientMessage: ClientMessage = new ClientMessage('Sorry, no spells to display')

  constructor(private spellsService: SpellsService) { }

  ngOnInit(): void {
    this.findAllSpells()
  }

  findAllSpells() {
    this.spells = this.spellsService.findAllSpells()
    this.filteredSpells = this.spells
    console.log(this.spells)
  }

  filterSpells() {
    let regex = new RegExp(`.*${this.search.toLowerCase()}.*`, 'mi')
    this.filteredSpells = this.spells.filter(s => {
      let classNames = []
      for (let c of s.classes) {
        classNames.push(c.name)
      }
      
      return (regex.test(s.name.toLowerCase()) ||
          regex.test(s.level.toString()) ||
          regex.test(s.school.name.toLowerCase()) ||
          regex.test(classNames.join(''))
        )
    })
  }

}
