import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/Spell';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {

  @Input() spell!: Spell
  classesNames: string[] = []
  

  constructor() { }

  ngOnInit(): void {
    this.setClassesNames()
  }

  setClassesNames() {
    for (let c of this.spell.classes) {
      this.classesNames.push(` ${c.name}`)
    }
  }

}
