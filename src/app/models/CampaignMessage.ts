export class CampaignMessage {
    username: string
    message: string
    timeStamp: string

  constructor(username: string, message: string, timeStamp: string) {
    this.username = username
    this.message = message
    this.timeStamp = timeStamp
  }

}