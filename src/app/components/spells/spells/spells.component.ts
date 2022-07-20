import { SpellsService } from '../../../services/spells.service';
import { Component } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent{

  title: string = ''
  levelNames = [
    'Cantrip', 
    '1st-Level',
    '2nd-Level',
    '3rd-Level',
    '4th-Level',
    '5th-Level',
    '6th-Level',
    '7th-Level',
    '8th-Level',
    '9th-Level',
]
  levels: any = []
  clientMessage: ClientMessage = new ClientMessage('Sorry, no spells to display')

  constructor(private spellsService: SpellsService, private router : Router, private route: ActivatedRoute) { 
    this.route.queryParams
    .subscribe(param => {
      this.levels = []
      this.title = this.capitalizeFirstLetter(param['charClass'])
      for (let i = 0; i < 10; i++){
        this.spellsService.findSpellsByClassNameByLevel(param['charClass'] , i)
        .subscribe(data => {
            if(data.count != 0) {
              let level = {name: this.levelNames[i], spells: data}
              this.levels.push(level)
              this.levels.sort((a: any, b: any) => {
                if (a.name.charAt(0) == 'C') {
                  return -1
                } else if (b.name.charAt(0) == 'C') {
                  return 1
                } else if (a.name.charAt(0) < b.name.charAt(0)) {
                  return -1
                } else {
                  return 1
                }
              })
            }
        })
      }
    })
   }

  ngOnchange(): void {
    this.levels = []
  }

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}