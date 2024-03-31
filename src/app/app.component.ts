import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  storeSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private store: Store<{auth: any}>
  ) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('auth').subscribe((auth: any) => {
      let { email, accessToken } = auth.infor;
      if(!email && !accessToken) {
        this.router.navigate(['/auth']);
      }
    })
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
  
}
