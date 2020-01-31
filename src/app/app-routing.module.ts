import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketOverviewComponent } from './market-overview/market-overview.component';


const routes: Routes = [
  { path: '', component: MarketOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
