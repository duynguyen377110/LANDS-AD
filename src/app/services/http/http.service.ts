import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ihttp } from '../Ihttp';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService implements Ihttp {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload);
  }

  patch(url: string, payload: any): Observable<any> {
    return this.http.patch(url, payload);
  }

  push(): void { }

  delete(url: string, payload: any): Observable<any> {
    return this.http.delete(url, {body: payload});
  }
}
