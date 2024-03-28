import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryLoadAllService implements Resolve<any> {

  constructor(
    private httpService: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let url: string = `${environment.api.urlCommon}${environment.api.category.common.all}`;
    return this.httpService.get(url);
  }
}
