import { Race } from './Race';
export class AlternatePackage {
    count: number
    next: string
    previous: string
    results: any[]

    constructor(
        count: number, 
        next: string, 
        previous: string, 
        results: any[]
    ) {
        this.count = count
        this.next = next
        this.previous = previous
        this.results = results
    }
}