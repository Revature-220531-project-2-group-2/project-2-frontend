import { ActivatedRoute } from '@angular/router';
import { SpellsService } from './../../../services/spells.service';
import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/Spell';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {

  spell!: Spell
  classesNames: string[] = []
  desc: any[] = []
  

  constructor(private spellsService: SpellsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(param => {
      this.spellsService.findSpell(param['name'])
      .subscribe(data => {
        this.spell = data
        this.setClassesNames()
        this.findDescHeadings()
      })

    })
    
  }

  setClassesNames() {
    for (let c of this.spell.classes) {
      this.classesNames.push(` ${c.name}`)
    }
  }
  
  findDescHeadings() {
    const regex = /^(\*{3}(.+)\*{3})?(.+)/
    let isTable = false
    let temp = {
      head: '',
      body: '',
      bold: '',
      tableHead: <any>[],
      tableRow: <any>[]
      
    }
    for (let i in this.spell.desc) {
      if (this.spell.desc[i].includes('|')) {
        if (!isTable){
          temp.tableHead = this.spell.desc[i].split('|')
        } else if (!this.spell.desc[i].includes('|--')) {
          temp.tableRow.push(this.spell.desc[i].split('|'))
        }
        isTable = true
        if ( Number.parseInt(i) + 1 == this.spell.desc.length && isTable) this.desc.push(temp)
        continue;
      } else if (isTable) {
        isTable = false
        this.desc.push(temp)
        temp = {
          head: '',
          body: '',
          bold: '',
          tableHead: <any>[],
          tableRow: <any>[]
        }
      } 
      let arr = this.spell.desc[i].match(regex)
        if (arr) {
          temp.bold = arr[2]
          if (arr[3].includes('#####')){
            temp.head = arr[3].split('')
              .splice(6)
              .join('')
          } else {temp.body = arr[3]}
            this.desc.push(temp)
          temp = {
            head: '',
            body: '',
            bold: '',
            tableHead: <any>[],
            tableRow: <any>[]
            
          }
        }
        
      }
    }
    
  }
  
  
  
  