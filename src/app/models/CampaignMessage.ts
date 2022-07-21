export class CampaignMessage {
  username: string
  msg: string
  timeStamp: string

  constructor(username: string, message: string, timeStamp: string) {
    this.username = username
    this.msg = message
    this.timeStamp = timeStamp
  }

}