import { Injectable } from '@angular/core';
import { url } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, Observer } from 'rxjs';
import { User } from '../models/User';
import { Campaign } from '../models/Campaign';

const campaignUrl = url + `/campaigns`

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  // creates a new Campaign on the server. Passes the form attr as request body
  createCampaign(campaign: Campaign): Observable<Campaign> {
    // 3 params for POST: url, request body, options (headers)
    return this.http.post<Campaign>(`${campaignUrl}/add`, campaign, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // get's all active campaigns available on server
  getAllCampaigns(): Observable<Campaign> {
    return this.http.get<Campaign>(campaignUrl, this.httpOptions).pipe(catchError(this.handleError));
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
