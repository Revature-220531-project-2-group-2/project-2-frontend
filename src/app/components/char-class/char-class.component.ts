import { DescriptionParsingService } from './../../services/description-parsing.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-char-class',
  templateUrl: './char-class.component.html',
  styleUrls: ['./char-class.component.css']
})
export class CharClassComponent implements OnInit {

  currentClass: any;
  desc: any[] = []
  equipment: any[] = []
  table: any[] = []

  constructor(private route: ActivatedRoute, private parserServ: DescriptionParsingService) {
  }
  
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(data => {
      this.currentClass = data
      this.desc = this.parserServ.parseDesc(data['desc'])
      this.equipment = this.parserServ.parseDesc(data['equipment']).slice(1)
      console.log(this.equipment)
      this.table = this.parserServ.parseDesc(data['table'])
    })

  }



}
