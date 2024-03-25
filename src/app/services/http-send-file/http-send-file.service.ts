import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleLoader } from 'src/app/store/store-loader/store-loader-action';

@Injectable({
  providedIn: 'root'
})
export class HttpSendFileService {

  constructor(
    private store: Store<{loader: any}>
  ) { }

  post(url: string, payload: any = {}): Promise<any> {
    this.store.dispatch(toggleLoader())
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(url, {
          method: 'POST',
          body: payload
        })

        if(!res.ok) throw new Error('Call api unsuccess');
        this.store.dispatch(toggleLoader())
        resolve(await res.json());

      } catch (error) {
        this.store.dispatch(toggleLoader())
        reject(error);

      }
    })
  }

  patch(url: string, payload: any = {}): Promise<any> {
    this.store.dispatch(toggleLoader())
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(url, {
          method: 'PATCH',
          body: payload
        })

        if(!res.ok) throw new Error('Call api unsuccess');
        this.store.dispatch(toggleLoader())
        resolve(await res.json());

      } catch (error) {
        this.store.dispatch(toggleLoader())
        reject(error);

      }
    })
  }
}
