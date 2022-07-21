import { CampaignMessage } from './../../models/CampaignMessage';
import { CampaignService } from './../../services/campaign.service';
import { Campaign } from './../../models/Campaign';
import { AppComponent } from './../../app.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-room',
  templateUrl: './campaign-room.component.html',
  styleUrls: ['./campaign-room.component.css']
})
export class CampaignRoomComponent implements OnInit {

  messages: CampaignMessage[] = [
    new CampaignMessage("DragonLord", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati eligendi dolores. Molestias expedita sit iure facilis ullam nobis! Eius, sapiente exercitationem quas voluptates eum labore voluptatem ut dolor? Voluptatibus!", "1234"),
    new CampaignMessage("Merlin", "Est obcaecati eligendi dolores. Molestias expedita sit iure facilis ullam nobis! Eius, sapiente exercitationem quas voluptates eum labore voluptatem ut dolor? Voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.", "2234")
  ]
  newPost: string = ''
  campaign: Campaign = new Campaign(0, '', [])
  currentDie: string = 'D4'

  constructor(private appComponent: AppComponent, private route: ActivatedRoute, private campServe: CampaignService) {
    this.route.queryParams
      .subscribe(param => {
        this.campServe.getCampaignMessages(param['id'])
          .subscribe(data => {
            this.messages = data
            this.messages.sort((a, b) => Number.parseInt(a.timeStamp) - Number.parseInt(b.timeStamp))
          })
        this.campServe.getCampaignById(param['id'])
          .subscribe(data => {
            this.campaign = data
          })
      })
  }

  ngOnInit(): void {
  }

  refreshMessages(): void {
    this.campServe.getCampaignMessages(this.campaign.campaignId)
      .subscribe(data => {
        console.log(data)
        this.messages = data
        this.messages.sort((a, b) => Number.parseInt(a.timeStamp) - Number.parseInt(b.timeStamp))
      })
  }

  postMessage(message: string): void {
    this.campServe.postNewMessage(this.campaign.campaignId, this.appComponent.username, message)
      .subscribe(data => {

        this.messages.push(data);

        this.newPost = ''
        this.refreshMessages()
      })
  }

  postRoll(die: string) {
    let dieNumber: number = Number.parseInt(die.slice(1))
    let roll: number = Math.floor(Math.random() * dieNumber)
    let message: string = `Rolled a ${roll} an a ${die}`
    this.postMessage(message)
  }
}
