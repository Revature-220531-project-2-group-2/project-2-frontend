import { Spell } from "./Spell";

export class SpellPage {
    count:number;
    next: string;
    previous: string;
    results: Spell[];


  constructor(
    count: number, 
    next: string, 
    previous: string, 
    results: Spell[]
) {
    this.count = count
    this.next = next
    this.previous = previous
    this.results = results
  }

}