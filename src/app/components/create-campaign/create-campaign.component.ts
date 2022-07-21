import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';
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

  constructor(private campaignService: CampaignService, private userService: UserService, private appComponent: AppComponent) {
    this.getUserByUsername();


  }

  // will take this out later. need currently logged in user here
  tempUser: User = new User('', '', '');
  // replace tempUser with currently logged in User
  campaign: Campaign = new Campaign(0, '', [this.tempUser]);

  private _clientMessage: ClientMessage = new ClientMessage('');
  public get clientMessage(): ClientMessage {
    return this._clientMessage;
  }
  public set clientMessage(value: ClientMessage) {
    this._clientMessage = value;
  }



  ngOnInit(): void {
  }

  filterForCurrentUser(users: User[]) {


    for (let i = 0; i < users.length; i++) {


      if (users[i].username === this.appComponent.username) {

        this.tempUser = users[i];


      }
    }


    return this.tempUser;
  }

  getUserByUsername(): void {
    this.userService.findAllUsers()
      .subscribe(data => {
        this.clientMessage.message = ``;
        this.filterForCurrentUser(data);
      }, error => this.clientMessage.message = `Something went wrong Error ${error}`);
  }

  asyncActions() {


    this.campaign.users = [];

    this.campaign.users.push(this.tempUser);
  }

  createCampaign(): void {

    this.asyncActions();



    this.campaignService.createCampaign(this.campaign)
      .subscribe(data => {
        this.campaignService.addUserToCampaignByUsername(data.campaignId, this.appComponent.username).subscribe(data2 => {
          this.clientMessage.message = `Successfully Created Campaign ID${this.campaign.campaignId}`;
        })



      }, error => this.clientMessage.message = `Something went wrong Error ${error}`)
  }

  joinUserToCampaign(id: number) {
    this.campaignService.addUserToCampaignByUsername(id, this.appComponent.username)
      .subscribe(data => {
        this.clientMessage.message = `Successfully Added ${this.appComponent.username} to Campaign ID ${this.campaign.campaignId};`
      }, error => this.clientMessage.message = `Something went wrong Error ${error}`)
  }

}
