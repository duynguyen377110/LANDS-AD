import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonsModule } from './commons/commons.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { loaderReducer } from './store/store-loader/store-loader-reducer';
import { authReducer } from './store/store-auth/store-auth-reducer';
import { warningReducer } from './store/store-warning/store-warning-reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonsModule,
    HttpClientModule,
    StoreModule.forRoot({
      loader: loaderReducer,
      auth: authReducer,
      warning: warningReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
