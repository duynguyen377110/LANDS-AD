import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAmountService implements Resolve<any> {

  url: string = `${environment.api.urlCommon}${environment.api.role.common.amount}`;

  constructor(
    private httpService: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpService.get(this.url);
  }

}