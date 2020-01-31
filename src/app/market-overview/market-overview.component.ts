import { Component, OnInit } from '@angular/core';
import { IexService } from '../iex.service';

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

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
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
