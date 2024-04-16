import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderRequestService {
  header = new HttpHeaders();

  constructor() { }

  getHeader(): HttpHeaders | any {
    let user: any = localStorage.getItem('user');
    if(user) {
      user = JSON.parse(user);
      this.header = new HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${user.accessToken}`)
                    .set('xxx-admin', user.id)
    }
    return this.header;
  }
}
