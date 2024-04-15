import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductAmountService implements Resolve<any> {

  url: string = `${environment.api.urlCommon}${environment.api.product.common.amount}`;

  constructor(
    private httpService: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpService.get(this.url);
  }
  
}
