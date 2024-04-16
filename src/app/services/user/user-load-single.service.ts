import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { HeaderRequestService } from '../header/header-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoadSingleService implements Resolve<any> {

  constructor(
    private httpService: HttpService,
    private headerRequest: HeaderRequestService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let { id } = route.params;
    let url: string = `${environment.api.urlCommon}${environment.api.user.common.root}/${id}`;
    return this.httpService.get(url, this.headerRequest.getHeader());
  }
}
