import { User } from './User';
export class Campaign {

    // classes enforce behavior around how an object can be initialized
    id: number;
    name: string;
    owner: User;
    players: User[];


    constructor(
        id: number,
        name: string,
        owner: User,
        players: User[]
    ) {
        this.id = id
        this.name = name
        this.owner = owner
        this.players = players
    }


}