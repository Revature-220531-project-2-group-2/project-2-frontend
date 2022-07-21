import { CampaignService } from './../../services/campaign.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { Campaign } from 'src/app/models/Campaign';
import { User } from 'src/app/models/User';

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
  myCamps: Campaign[] = [];
  myCampsId: number[] = [];

  constructor(public appComponent: AppComponent, private campService: CampaignService) {
    this.getAllCampaigns();


    this.findAllUsersCampaigns()


  }

  getAllCampaigns(): void {
    this.campService.getAllCampaigns()
      .subscribe(data => {
        this.campaigns = data;

      })
  }



  findAllUsersCampaigns(): void {
    this.campService.getAllUserCampaignsByUsername(this.appComponent.username)
      .subscribe(data => {
        this.myCamps = data;
        this.filterCamps(data);

      })
  }

  filterCamps(data: Campaign[]): void {
    let toReturn: number[] = [];
    toReturn = data.map(e => e.campaignId);
    this.myCampsId = toReturn;
  }

  joinUserToCampaign(id: number): void {
    this.campService.addUserToCampaignByUsername(id, this.appComponent.username)
      .subscribe(data => {
        // this.campaigns.filter(e => !(e.campaignId === id));
        this.deleteRow(id);
        this.campaigns.push(data);

      })
  }

  deleteRow(id: number) {
    for (let i = 0; i < this.campaigns.length; ++i) {
      if (this.campaigns[i].campaignId === id) {
        this.campaigns.splice(i, 1);
      }
    }
  }


  ngOnInit(): void {
  }

}
function u(u: any, arg1: (User: any) => boolean) {
  throw new Error('Function not implemented.');
}

