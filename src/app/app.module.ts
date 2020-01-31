import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketOverviewComponent } from './market-overview/market-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketOverviewComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
