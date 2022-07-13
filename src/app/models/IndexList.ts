import { Index } from './Index';

export class IndexList {
  count:number
  results: Index[]

  constructor(count: number, results: Index[]) {
    this.count = count
    this.results = results
  }

}