import { AlternatePackage } from './../models/AlternatePackage';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { dndUrlAlternate } from 'src/environments/environment';
import { Race } from '../models/Race';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) { }

  raceUrl = dndUrlAlternate + 'races'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  private findRaceList(): Observable<AlternatePackage> {
    return this.http.get<AlternatePackage>(this.raceUrl, this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  findAllRaces(): Race[] {
    let list: Race[] = []
    this.findRaceList().subscribe(data => {
      for (let r of data.results) {
        list.push(r)
      }
    })
    return list;
  }

  findRaceByIndex(index: string): Race {
    let race!: Race;
    this.http.get<Race>(this.raceUrl + index, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        race = data
      })
    return race;
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
