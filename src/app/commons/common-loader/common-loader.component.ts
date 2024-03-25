import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common-loader',
  templateUrl: './common-loader.component.html',
  styleUrls: ['./common-loader.component.scss']
})
export class CommonLoaderComponent implements OnInit, OnDestroy {
  loaderSub: Subscription = new Subscription();
  status: boolean = false;

  constructor(
    private store: Store<{loader: any}>
  ) {}

  ngOnInit(): void {
    this.loaderSub = this.store.select('loader').subscribe((loader) => {
      let { status } = loader;
      this.status = status;
    })
  }

  ngOnDestroy(): void {
    this.loaderSub.unsubscribe();
  }

}
