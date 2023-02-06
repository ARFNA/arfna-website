import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

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

  public contactUs(contact: Contact): any {
      return this.http.post<Contact>(
        this.urlBuilder('email'), contact,
        this.httpOptions());
  }
}
