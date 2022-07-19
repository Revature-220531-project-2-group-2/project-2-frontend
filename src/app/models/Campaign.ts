import { User } from './User';
export class Campaign {

    // classes enforce behavior around how an object can be initialized
    campaignId: number;
    campaignName: string;
    users: User[];


    constructor(
        id: number,
        name: string,
        players: User[]
    ) {
        this.campaignId = id
        this.campaignName = name
        this.users = players
    }


}