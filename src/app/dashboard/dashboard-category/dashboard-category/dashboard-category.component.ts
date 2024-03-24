import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit,OnDestroy {

  url: string = `${environment.api.urlCommon}${environment.api.category.common.all}`;
  urlDestroy: string = `${environment.api.url}${environment.api.category.admin.destroy}`;

  amountDataSub: Subscription = new Subscription();
  allCategorySub: Subscription = new Subscription();
  destroyCategorySub: Subscription = new Subscription();

  categories: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.amountDataSub = this.route.data.subscribe((data) => {
      console.log(data);

      this.allCategorySub = this.httpService.get(this.url).subscribe((data) => {
        console.log(data);
        let { status, categories } = data;
        if(status) {
          Object.assign(this.categories, categories);
        }
      })
    })
  }


  onDeleteHander(event: any) {    
    this.destroyCategorySub = this.httpService.delete(this.urlDestroy, {id: event})
    .subscribe((res) => {
      console.log(res);
    })
  }

  ngOnDestroy(): void {
    this.amountDataSub.unsubscribe();
    this.allCategorySub.unsubscribe();
    this.destroyCategorySub.unsubscribe();
  }
}
