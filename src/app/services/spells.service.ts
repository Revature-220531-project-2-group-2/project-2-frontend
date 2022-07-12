import { dndUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Spell } from '../models/Spell';
import { SpellPage } from '../models/spell-page';


const spellsUrl = dndUrl + 'spells'

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  findAllSpells(): Observable<SpellPage> {
    return this.http.get<SpellPage>(spellsUrl, this.httpOptions)
    .pipe(catchError(this.handleError))
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


