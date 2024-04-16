import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HeaderRequestService } from 'src/app/services/header/header-request.service';
import { HttpService } from 'src/app/services/http/http.service';
import { openWarning } from 'src/app/store/store-warning/store-warning-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit, OnDestroy {
  urlDestroy: string = `${environment.api.url}${environment.api.user.admin.root}`;
  users: Array<any> = [];
  dataUserSub: Subscription = new Subscription();
  destroyUserSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private headerRequest: HeaderRequestService,
    private store: Store<{auth: any, warning: any}>,
  ) { }

  ngOnInit(): void {
    this.dataUserSub = this.route.data.subscribe((data: any) => {
      let { users } = data.users.metadata;
      this.users = users;
    })
  }

  onDeleteHander(event: any) {
    this.destroyUserSub = this.httpService.delete(this.urlDestroy, {id: event}, this.headerRequest.getHeader()).subscribe(
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
    this.router.navigate(['user/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataUserSub.unsubscribe();
  }

}
