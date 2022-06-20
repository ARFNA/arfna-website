import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MSubscriber } from '../../../models/m-subscriber';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  public mSubscriber(mSubscriber: MSubscriber) {
      return this.http.post<MSubscriber>(
        this.urlBuilder('msubscriber'), mSubscriber,
        this.httpOptions());
  }

}
