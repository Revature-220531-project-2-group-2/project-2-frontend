import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, Observer } from 'rxjs';
import { User } from '../models/User';
import { Campaign } from '../models/Campaign';

// http://localhost:5000/api/users
const userUrl = url + `/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  // registers a new User on the site
  registerUser(user: User): Observable<User> {

    // 3 params for POST: url, request body, options (headers)
    return this.http.post<User>(`${userUrl}`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Get's all Campaigns a User is signed up in
  findCampaignsByUser(user: User): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${url}/${user.id}/campaigns`, this.httpOptions).pipe(catchError(this.handleError));
  }


  // have to get All Users and filter right now...
  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${userUrl}`, this.httpOptions)
      .pipe(catchError(this.handleError));
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
