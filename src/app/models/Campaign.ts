import { User } from './User';
export class Campaign {

    // classes enforce behavior around how an object can be initialized
    campaignId: number;
    campaignName: string;
    users: User[];
    usernameOfCreator: string;

    constructor(
        id: number,
        name: string,
        players: User[],
        usernameOfCreator: string
    ) {
        this.campaignId = id
        this.campaignName = name
        this.users = players
        this.usernameOfCreator = usernameOfCreator
    }


}