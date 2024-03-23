import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoryHttpService } from './category-http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryAmountService implements Resolve<any> {
  url: string = `${environment.api.url}${environment.api.category.amount}`;

  constructor(
    private categoryHttpService: CategoryHttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.categoryHttpService.get(this.url);
  }

}
