import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ihttp } from '../Ihttp';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService implements Ihttp {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, payload: any = {}): Observable<any> {
    return this.http.post(url, payload);
  }

  push(): void {
    throw new Error('Method not implemented.');
  }

  delete(): void {
    throw new Error('Method not implemented.');
  }
}
