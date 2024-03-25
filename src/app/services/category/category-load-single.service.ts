import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryLoadSingleService implements Resolve<any> {

  constructor(
    private httpService: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = `${environment.api.urlCommon}${environment.api.category.common.root}`;
    let { id } = route.params;
    url = `${url}/${id}`;
    return this.httpService.get(url);
  }
}
