import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketOverviewComponent } from './market-overview/market-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MarketOverviewComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
