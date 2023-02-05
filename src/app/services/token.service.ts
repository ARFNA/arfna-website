import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RSubscriber } from '../models/rsubscriber';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  public httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'text/json'
      })
    };
  }

  public urlBuilder(url: string): string {
    return `${environment.api_prefix}${url}`;
  }

  public rSubscriber(rSubscriber: RSubscriber) {
      return this.http.post<RSubscriber>(
        this.urlBuilder('rsubscriber'), rSubscriber,
        this.httpOptions());
  }

  public logout() {
    return this.http.post<any>(
      this.urlBuilder('msubscriber'), 
      {
        'version': 'V1',
        'mutation': 'LOGOUT'
      },
      this.httpOptions());
  }

  public accept() {
    return this.http.post<any>(
      this.urlBuilder('msubscriber'),
      {
        'version': 'V1',
        'mutation': 'ACCEPT_TERMS_OF_SERVICE'
      },
      this.httpOptions());
  }
}
