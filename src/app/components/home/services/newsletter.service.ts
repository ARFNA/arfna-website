import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MSubscriber } from 'src/app/models/m-subscriber';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  public httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  public urlBuilder(url: string): string {
    //return `${environment.api_prefix}/${url}`;
    return `/api/${url}`;
  }

  public mSubscriber(mSubscriber: MSubscriber) {
      return this.http.post<MSubscriber>(
        this.urlBuilder('msubscriber'), mSubscriber,
        this.httpOptions());
  }
}
