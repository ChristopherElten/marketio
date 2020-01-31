import { Component, OnInit } from '@angular/core';
import { IexService } from '../iex.service';

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.scss']
})
export class MarketOverviewComponent implements OnInit {

  constructor(private iexService: IexService) { }

  ngOnInit() {
    this.iexService.getTodaysMarketTradingVolume().subscribe(res => console.log(res));
  }

}
