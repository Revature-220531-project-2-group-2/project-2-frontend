import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-room',
  templateUrl: './campaign-room.component.html',
  styleUrls: ['./campaign-room.component.css']
})
export class CampaignRoomComponent implements OnInit {

  messages: any[] = [
    {poster: "DragonLord", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati eligendi dolores. Molestias expedita sit iure facilis ullam nobis! Eius, sapiente exercitationem quas voluptates eum labore voluptatem ut dolor? Voluptatibus!"},
    {poster: "Merlin", message: "Est obcaecati eligendi dolores. Molestias expedita sit iure facilis ullam nobis! Eius, sapiente exercitationem quas voluptates eum labore voluptatem ut dolor? Voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  ]
  newPost: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  postMessage(): void {
    console.log(this.newPost)
  }
}