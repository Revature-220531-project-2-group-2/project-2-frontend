import { Index } from '../models/Index';
import { dndUrlPrimary } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Spell } from '../models/Spell';
import { IndexList } from '../models/IndexList';




@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  
  spellsUrl = dndUrlPrimary + "/api/spells/"
  classUrl = dndUrlPrimary + "/api/classes/"
  spellList!: Index[]
  spellClass!: Index

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  
  constructor(private http: HttpClient) { }
  
  
  private findSpellAllList(): Observable<IndexList> {
    return this.http.get<IndexList>(this.spellsUrl, this.httpOptions)
    .pipe(catchError(this.handleError))
  }
  
  private findSpellListByClass(className:string): Observable<IndexList> {
    return this.http.get<IndexList>(this.classUrl + className + "/spells", this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  findSpell(url: string): Observable<Spell> {
    return this.http.get<Spell>(dndUrlPrimary + url, this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  findAllSpells(): Spell[] {
    let list: Spell[] = []
    this.findSpellAllList()
      .subscribe(data => {
        for (let si = 0; si < data.results.length; si++) {
          this.findSpell(data.results[si].url)
          .subscribe(rsp => {
            list.push(rsp)
          })
        }
      })
    return list
  }

  findSpellsByClassName(classIndex:string): Spell[] {
    let list: Spell[] = []
    this.findSpellListByClass(classIndex)
      .subscribe(data => {
        for (let si = 0; si < data.results.length; si++) {
          this.findSpell(data.results[si].url)
          .subscribe(rsp => {
            list.push(rsp)
          })
        }
      })
    return list
  }


  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {
      console.log('an error occured: ', httpError.error.message);
    } else {
      console.error(`
        Backend returned code ${httpError.status}
        body was: ${httpError.error}
      `)
    }

    return throwError(() => new Error('something really bad happened'));
  }
}


