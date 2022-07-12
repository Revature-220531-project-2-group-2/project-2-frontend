import { SpellsService } from './../../services/spells.service';
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
    console.log(this.filteredSpells)
  }

  findAllSpells() {
    this.spellsService.findAllSpells()
    .subscribe(data => {
      this.spells = data.results
      this.filteredSpells = this.spells})

  }

  filterSpells() {
    let regex = new RegExp(`.*${this.search}.*`, 'mi')
    this.filteredSpells = this.spells.filter(s => {
      return (regex.test(s.name) ||
        regex.test(s.level) ||
        regex.test(s.school) ||
        regex.test(s.dnd_class))
    })
  }

}
