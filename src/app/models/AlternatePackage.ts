import { Race } from './Race';
export class AlternatePackage {
    count: number
    next: string
    previous: string
    results: Race[]

    constructor(
        count: number, 
        next: string, 
        previous: string, 
        results: Race[]
    ) {
        this.count = count
        this.next = next
        this.previous = previous
        this.results = results
    }
}