import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HeaderRequestService } from '../header/header-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserAmountService implements Resolve<any> {

  url: string = `${environment.api.urlCommon}${environment.api.user.common.amount}`;

  constructor(
    private httpService: HttpService,
    private headerRequest: HeaderRequestService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpService.get(this.url, this.headerRequest.getHeader());
  }
}
