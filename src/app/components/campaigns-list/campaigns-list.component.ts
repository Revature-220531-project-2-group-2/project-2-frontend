import { CampaignService } from './../../services/campaign.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Campaign } from 'src/app/models/Campaign';

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
  campaigns: Campaign[] = [];

  constructor(public appComponent: AppComponent, private campService: CampaignService) {
    this.getAllCampaigns();
  }

  getAllCampaigns(): void {
    this.campService.getAllCampaigns()
      .subscribe(data => {
        this.campaigns = data;
      })
  }


  ngOnInit(): void {
  }

}
