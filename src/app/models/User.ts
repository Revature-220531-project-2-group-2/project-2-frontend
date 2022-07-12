export class User {

    // classes enforce behavior around how an object can be initialized
    id: number;
    username: string;
    password: string;
    email: string;

    // CTRL + SHIFT + P > TypeScript Constructor Generator

    constructor(
        id: number,
        username: string,
        password: string,
        email: string,
    ) {
        this.id = id
        this.username = username
        this.password = password
        this.email = email
    }

}

export class Address {

    street: string;
    secondary: string;
    state: string;
    city: string;
    zip: string;


    constructor(
        street: string,
        secondary: string,
        state: string,
        city: string,
        zip: string
    ) {
        this.street = street
        this.secondary = secondary
        this.state = state
        this.city = city
        this.zip = zip
    }


}