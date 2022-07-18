import { CampaignService } from './../../services/campaign.service';
import { Campaign } from './../../models/Campaign';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  title = 'Create a Campaign'

  constructor(private campaignService: CampaignService) { }

  // will take this out later. need currently logged in user here
  tempUser: User = new User('', '', '');
  // replace tempUser with currently logged in User
  campaign: Campaign = new Campaign(0, '', this.tempUser, [this.tempUser]);

  private _clientMessage: ClientMessage = new ClientMessage('');
  public get clientMessage(): ClientMessage {
    return this._clientMessage;
  }
  public set clientMessage(value: ClientMessage) {
    this._clientMessage = value;
  }



  ngOnInit(): void {
  }

  createCampaign(): void {
    this.campaignService.createCampaign(this.campaign)
      .subscribe(data => this.clientMessage.message = `Successfully Created Campaign ID${this.campaign.id}`, error => this.clientMessage.message = `Soemthing went wrong Error ${error}`)
  }

}
