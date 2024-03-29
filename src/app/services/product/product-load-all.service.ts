import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductLoadAllService implements Resolve<any> {

  constructor(
    private httpService: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let url = `${environment.api.urlCommon}${environment.api.product.common.all}`;
    return this.httpService.get(url);
  }


}
