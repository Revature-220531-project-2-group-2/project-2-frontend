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

  constructor(private route: ActivatedRoute, private parserServ: DescriptionParsingService) {
  }
  
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(data => {
      this.currentClass = data
      this.desc = this.parserServ.parseDesc(data['desc'])
    })

  }



}
