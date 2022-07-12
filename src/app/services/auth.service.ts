import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { url } from 'src/environments/environment';
import { User } from '../models/User';

/**
 * We need to make an HTTP Request to the auth controller of the API
 * http://localhost:5000/api/login ({username: "someone", password: "password"})
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // this will be sent as the header of the POST request
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  loginUrl = url + '/login'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {

    // this represents the body of the response
    const payload = { username, password }  // (claims)

    // return the this.http.post method
    return this.http.post<any>(this.loginUrl, payload, { observe: 'response' })
      .pipe(catchError(this.handleError))
    // might need to replace this.httpOptions with {observe: 'response' }
    // alterantively add .pip() to return any errors
    // create a custom error method
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('an error occurred: ', httpError.error.message)
    } else {
      console.error(`
        Backend returned code ${httpError.status}
        body was: ${httpError.error}
      `)
    }
    return throwError(() => new Error('something went horribly wrong'))
  }

}
