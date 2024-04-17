import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HeaderRequestService } from 'src/app/services/header/header-request.service';
import { HttpService } from 'src/app/services/http/http.service';
import { openWarning } from 'src/app/store/store-warning/store-warning-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit,OnDestroy {

  url: string = `${environment.api.urlCommon}${environment.api.category.common.all}`;
  urlDestroy: string = `${environment.api.url}${environment.api.category.admin.root}`;


  amountDataSub: Subscription = new Subscription();
  allCategorySub: Subscription = new Subscription();
  destroyCategorySub: Subscription = new Subscription();
  destroyCategoryThumb: Subscription = new Subscription();

  categories: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private headerRequest: HeaderRequestService,
    private httpService: HttpService,
    private store: Store<{warning: any}>
  ) { }

  ngOnInit(): void {
    this.amountDataSub = this.route.data.subscribe((data) => {
      this.allCategorySub = this.httpService.get(this.url).subscribe((data) => {
        let { categories }: any = data.metadata;
        if(categories.length) {
          Object.assign(this.categories, categories);
        }
      })
    })
  }


  onDeleteHander(event: any) {    
    this.destroyCategorySub = this.httpService.delete(this.urlDestroy, {id: event}, this.headerRequest.getHeader()).subscribe(
      (res) => {
        let { status } = res;

        if(status) {
          window.location.reload();
        }
      },
      (error: any) => {
        this.store.dispatch(openWarning({message: error.message}));
      })
  }

  onUpdateHandler(event: any) {
    this.router.navigate(['/category/edit', event]);
  }

  ngOnDestroy(): void {
    this.amountDataSub.unsubscribe();
    this.allCategorySub.unsubscribe();
    this.destroyCategorySub.unsubscribe();
    this.destroyCategoryThumb.unsubscribe();
  }
}
