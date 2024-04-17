import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleLoader } from 'src/app/store/store-loader/store-loader-action';
import { openWarning } from 'src/app/store/store-warning/store-warning-action';

@Injectable({
  providedIn: 'root'
})
export class HttpSendFileService {

  constructor(
    private store: Store<{loader: any, warning: any}>
  ) { }

  post(url: string, payload: any = {}): Promise<any> {
    this.store.dispatch(toggleLoader())
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(url, {
          method: 'POST',
          body: payload
        })

        if(!res.ok) {
          let metadata = await res.json();
          throw new Error(metadata.message);
        }

        this.store.dispatch(toggleLoader())
        resolve(await res.json());

      } catch (error: any) {
        this.store.dispatch(toggleLoader());
        this.store.dispatch(openWarning({message: error.message}));
        reject({status: false});

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

        if(!res.ok) {
          let metadata = await res.json();
          throw new Error(metadata.message);
        }
        this.store.dispatch(toggleLoader());
        resolve(await res.json());

      } catch (error: any) {
        this.store.dispatch(toggleLoader());
        this.store.dispatch(openWarning({message: error.message}));
        reject({status: false});

      }
    })
  }
}
