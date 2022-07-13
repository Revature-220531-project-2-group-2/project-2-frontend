import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/ClientMessage';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  title = 'Create a Campaign'
  clientMessage: ClientMessage = new ClientMessage('');

  constructor() { }

  ngOnInit(): void {
  }

  createCampaign(): void {

  }

}
