import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/Spell';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {

  @Input() spell!: Spell

  constructor() { }

  ngOnInit(): void {
  }

}
