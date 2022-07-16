import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/Race';
import { RaceService } from 'src/app/services/race-service.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Race[] = []

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.getAllRaces()
  }

  getAllRaces(): void {
    this.races = this.raceService.findAllRaces()
    console.log(this.races)
  }

}
