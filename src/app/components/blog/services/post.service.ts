import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  public urlBuilder(url: string): string {
    return `${environment.api_prefix}${url}`;
  }

  public gPost() {
      return this.http.post(
        this.urlBuilder('gpost'), {
          'version': 'V1',
          'requestType': 'GET_ALL_PUBLISHED'
      },
        this.httpOptions());
  }

  public uPost() {
    return this.http.post(
      this.urlBuilder('mpost'), {
          'version': 'V1',
          'mutation': 'GET_FOR_SUBSCRIBER'
    },
      this.httpOptions());
  }
}
