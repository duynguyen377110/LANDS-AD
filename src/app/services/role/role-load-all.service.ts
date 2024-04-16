import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { HeaderRequestService } from '../header/header-request.service';

@Injectable({
  providedIn: 'root'
})
export class RoleLoadAllService implements Resolve<any> {

  constructor(
    private httpService: HttpService,
    private headerRequest: HeaderRequestService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let url: string = `${environment.api.urlCommon}${environment.api.role.common.all}`;
    return this.httpService.get(url, this.headerRequest.getHeader());
  }
}
