import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpSendFileService {

  constructor() { }

  post(url: string, payload: any = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(url, {
          method: 'POST',
          body: payload
        })

        if(!res.ok) throw new Error('Call api unsuccess');
        resolve(await res.json());

      } catch (error) {
        reject(error);

      }
    })
  }

  patch(url: string, payload: any = {}): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await fetch(url, {
          method: 'PATCH',
          body: payload
        })

        if(!res.ok) throw new Error('Call api unsuccess');
        resolve(await res.json());

      } catch (error) {
        reject(error);

      }
    })
  }
}
