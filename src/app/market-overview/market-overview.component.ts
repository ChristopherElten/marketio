import { Component, OnInit } from '@angular/core';
import { IexService } from '../iex.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.scss']
})
export class MarketOverviewComponent implements OnInit {
  marketTradingVolume: [];
  isMarketOpen: boolean;
  favoriteStocksListData: {};
  favoriteStocks = [
    'GOOG',
    'AAPL'
  ];

  constructor(private iexService: IexService) { }

  ngOnInit() {
    this.iexService.getTodaysMarketTradingVolume()
      .subscribe((res: []) => this.marketTradingVolume = res);

      // todo - make quote an enum with other type options
    this.iexService.getBatchStocks(this.favoriteStocks, ['quote'])
      .subscribe((res) => {
        this.favoriteStocksListData = res;
        this.isMarketOpen = Object.values(res)[0].quote.isUSMarketOpen;
      });
  }

}
