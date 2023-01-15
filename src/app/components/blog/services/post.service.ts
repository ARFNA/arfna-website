import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';
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

  public savePost(post: Post) {
    return this.http.post(
      this.urlBuilder('mpost'), {
          'version': 'V1',
          'mutation': 'SAVE',
          'post': post
    },
      this.httpOptions());
  }

  public submitPost(post: Post) {
    return this.http.post(
      this.urlBuilder('mpost'), {
          'version': 'V1',
          'mutation': 'SUBMIT',
          'post': post
    },
      this.httpOptions());
  }

  public getPost(id: number) {
  return this.http.post(
    this.urlBuilder('mpost'), {
        'id': id,
        'version': 'V1',
        'mutation': 'GET_EXISTING_POST'
  },
    this.httpOptions());
  }

  public acceptPost(id: number) {
    return this.http.post(
      this.urlBuilder('mpost'), {
          'id': id,
          'version': 'V1',
          'mutation': 'ACCEPT'
    },
      this.httpOptions());
  }

  public publishPost(id: number) {
    return this.http.post(
      this.urlBuilder('mpost'), {
          'id': id,
          'version': 'V1',
          'mutation': 'PUBLISH'
    },
      this.httpOptions());
  }
}
