import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketOverviewComponent } from './market-overview/market-overview.component';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [
  { path: '', component: MarketOverviewComponent },
  { path: 'stock/:symbol', component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
