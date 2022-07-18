export class User {

    // classes enforce behavior around how an object can be initialized
    id: number;
    username: string;
    pwd: string;
    email: string;

    // CTRL + SHIFT + P > TypeScript Constructor Generator

    constructor(
        username: string,
        password: string,
        email: string,
    ) {
        this.id = 0
        this.username = username
        this.pwd = password
        this.email = email
    }

}

