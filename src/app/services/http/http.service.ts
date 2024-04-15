import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { Ihttp } from '../Ihttp';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { toggleLoader } from "../../store/store-loader/store-loader-action";


@Injectable({
  providedIn: 'root'
})
export class HttpService implements Ihttp {

  constructor(
    private http: HttpClient,
    private store: Store<{loader: any}>
  ) { }

  get(url: string): Observable<any> {
    this.store.dispatch(toggleLoader());

    return this.http.get(url)
    .pipe(
      map((response: any) => {
        this.store.dispatch(toggleLoader());
        return response;
      }),
      catchError((responseErr: any) => {
        this.store.dispatch(toggleLoader());
        let payload = {
          status: responseErr.ok,
          message: responseErr.statusText
        }
        return throwError(() => payload);
      })
    )
  }

  post(url: string, payload: any): Observable<any> {
    this.store.dispatch(toggleLoader());

    return this.http.post(url, payload)
    .pipe(
      map((response: any) => {
        this.store.dispatch(toggleLoader());
        return response;
      }),
      catchError((responseErr: any) => {
        this.store.dispatch(toggleLoader());
        let payload = {
          status: responseErr.ok,
          message: responseErr.statusText
        }
        return throwError(() => payload);
      })
    )
  }

  patch(url: string, payload: any): Observable<any> {
    this.store.dispatch(toggleLoader());
    return this.http.patch(url, payload)
    .pipe(
      map((response: any) => {
        this.store.dispatch(toggleLoader());
        return response;
      }),
      catchError((responseErr: any) => {
        this.store.dispatch(toggleLoader());
        let payload = {
          status: responseErr.ok,
          message: responseErr.statusText
        }
        return throwError(() => payload);
      })
    )
  }

  push(): void { }

  delete(url: string, payload: any): Observable<any> {
    this.store.dispatch(toggleLoader());
    return this.http.delete(url, {body: payload})
    .pipe(
      map((response: any) => {
        this.store.dispatch(toggleLoader());
        return response;
      }),
      catchError((responseErr: any) => {
        this.store.dispatch(toggleLoader());
        let payload = {
          status: responseErr.ok,
          message: responseErr.statusText
        }
        return throwError(() => payload);
      })
    )
  }
}
