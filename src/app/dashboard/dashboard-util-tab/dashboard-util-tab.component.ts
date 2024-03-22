import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-util-tab',
  templateUrl: './dashboard-util-tab.component.html',
  styleUrls: ['./dashboard-util-tab.component.scss']
})
export class DashboardUtilTabComponent implements OnInit, OnDestroy {

  eventSub: Subscription = new Subscription();
  currentPoist: String = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eventSub = this.router.events.subscribe((event: any) => {
      this.currentPoist = event.routerEvent?.urlAfterRedirects;
    })
  }

  onRedirectHandler() {
    switch(this.currentPoist) {
      case '/category':
        this.router.navigate(['/category/new']);
        break

      default:
        break
    }
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
  }

}
