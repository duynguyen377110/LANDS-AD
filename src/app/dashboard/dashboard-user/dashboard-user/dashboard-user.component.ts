import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
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
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.dataUserSub = this.route.data.subscribe((data: any) => {
      let { users } = data.users;
      this.users = users;
    })
  }

  onDeleteHander(event: any) {
    this.destroyUserSub = this.httpService.delete(this.urlDestroy, {id: event})
    .subscribe((res) => {
      let { status } = res;
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateHandler(event: any) {

  }

  ngOnDestroy(): void {
    this.dataUserSub.unsubscribe();
  }

}
