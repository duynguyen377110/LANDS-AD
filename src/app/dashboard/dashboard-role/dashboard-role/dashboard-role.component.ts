import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role',
  templateUrl: './dashboard-role.component.html',
  styleUrls: ['./dashboard-role.component.scss']
})
export class DashboardRoleComponent implements OnInit, OnDestroy {
  urlDestroy: string = `${environment.api.url}${environment.api.role.admin.root}`;
  roles: Array<any> = [];
  dataSub: Subscription = new Subscription();
  destroyRoleSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { roles } = data.roles;
      console.log(roles);
      this.roles = roles;
    })
  }

  onDeleteHander(event: any) {   
    this.destroyRoleSub = this.httpService.delete(this.urlDestroy, {id: event})
    .subscribe((res) => {
      let { status } = res;
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateHandler(event: any) {
    // this.router.navigate(['/category/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.destroyRoleSub.unsubscribe();
  }

}
