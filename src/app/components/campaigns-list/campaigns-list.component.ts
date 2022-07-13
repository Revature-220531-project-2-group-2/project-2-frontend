import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';

/**
 * This component lists all campaigns that are available on the site. Not unique to any visitor and is similar to fetching all campaigns that exist in the database. 
 * */

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {
  clientMessage: ClientMessage = new ClientMessage('');
  title: string = 'Campaigns'
  constructor() { }

  ngOnInit(): void {
  }

}
