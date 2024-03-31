import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoadAllService implements Resolve<any> {

  constructor(
    private httpService: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = `${environment.api.urlCommon}${environment.api.user.common.all}`;
    return this.httpService.get(url);
  }
}
