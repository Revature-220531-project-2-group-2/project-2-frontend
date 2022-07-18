import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { dndUrlAlternate } from 'src/environments/environment';
import { AlternatePackage } from '../models/AlternatePackage';
import { CharClass } from '../models/CharClass';

@Injectable({
  providedIn: 'root'
})
export class CharClassService {

  classUrl = dndUrlAlternate + 'classes'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  
  constructor(private http: HttpClient) { }

  private findCharClassList(): Observable<AlternatePackage> {
    return this.http.get<AlternatePackage>(this.classUrl, this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  findAllCharClasses(): CharClass[] {
    let list: CharClass[] = []
    this.findCharClassList().subscribe(data => {
      for (let c of data.results) {
        list.push(c)
      }
    })
    return list;
  }

  findCharClassByName(name: string): CharClass {
    let charClass!: CharClass;
    this.http.get<CharClass>(this.classUrl + name, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(data => {
        charClass = data
      })
    return charClass;
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

