import { RaceService } from './../../services/race-service.service';
import { DescriptionParsingService } from './../../services/description-parsing.service';
import { ActivatedRoute } from '@angular/router';
import { Race } from './../../models/Race';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  currentRace!: any;
  desc: any[] = []
  ability: any[] = []
  speed: any[] = []
  vision: any[] = []
  age: any[] =[]
  alignment: any[] =[]
  size: any[] =[]
  languages: any[] =[]
  traits: any[] =[]


  constructor(private route: ActivatedRoute, private parserServ: DescriptionParsingService, private raceServ: RaceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(param => {
      this.raceServ.findRaceByName(param['race'])
      .subscribe(data => {
        this.currentRace = data
        this.desc = this.parserServ.parseDesc(data['desc'])
        this.ability = this.parserServ.parseDesc(data['asi_desc'])
        this.speed = this.parserServ.parseDesc(data['speed_desc'])
        this.vision = this.parserServ.parseDesc(data['vision'])
        this.age = this.parserServ.parseDesc(data['age'])
        this.alignment = this.parserServ.parseDesc(data['alignment'])
        this.size = this.parserServ.parseDesc(data['size'])
        this.languages = this.parserServ.parseDesc(data['languages'])
        this.traits = this.parserServ.parseDesc(data['traits'])
      })
    })
  } 

}
