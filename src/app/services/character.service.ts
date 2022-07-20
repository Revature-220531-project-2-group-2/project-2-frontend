import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { url } from 'src/environments/environment';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  userBaseUrl: string = url + `/users`;
  // need to add username dynamically
  requestUrl: string = this.userBaseUrl;  // this will change dynamically throughout service's use

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  createCharacter(username: string, char: Character): Observable<Character> {
    this.requestUrl = this.userBaseUrl;
    this.requestUrl = this.requestUrl + `/${username}/add-character`;
    return this.http.post<Character>(this.requestUrl, char, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  findAllCharactersBelongingToUser(userName: string): Observable<Character[]> {
    this.requestUrl = this.userBaseUrl;
    this.requestUrl = this.requestUrl + `/${userName}/characters`;
    return this.http.get<Character[]>(this.requestUrl, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  putCharacter(username: string, char: Character): Observable<Character> {
    console.log(char);

    this.requestUrl = this.userBaseUrl;
    this.requestUrl = this.requestUrl + `/${username}/update-character-${char.charId}`;
    return this.http.put<Character>(this.requestUrl, char, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  findCharByUsernameAndName(userName: string, charName: string): Observable<Character> {
    this.requestUrl = this.userBaseUrl;
    this.requestUrl = this.requestUrl + `/${userName}/characters/${charName}`;
    console.log(this.requestUrl);

    return this.http.get<Character>(this.requestUrl, this.httpOptions)
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
