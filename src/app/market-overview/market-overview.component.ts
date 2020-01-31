import { Component, OnInit } from '@angular/core';
import { IexService } from '../iex.service';

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.scss']
})
export class MarketOverviewComponent implements OnInit {
  isMarketOpen: boolean;

  favoriteStocks = [
    'GOOG',
    'AAPL',
    'SNAP'
  ];

  // todo - create constructors for columns
  marketVolumeColumnDefs = [
    {headerName: 'Venue Name', field: 'venueName', sortable: true, filter: true},
    {headerName: 'Volume', field: 'volume', sortable: true, filter: true},
    {headerName: 'Market Percent', field: 'marketPercent', sortable: true, filter: true}
  ];

  marketVolumeRowData: [];

  favoriteStocksColumnDefs = [
    {headerName: 'Symbol', field: 'symbol', sortable: true, filter: true},
    {headerName: 'Price', field: 'latestPrice', sortable: true, filter: true},
    {headerName: 'Change Percent', field: 'changePercent', sortable: true, filter: true}
  ];

  favoriteStocksRowData;

  constructor(private iexService: IexService) { }

  ngOnInit() {
    this.iexService.getTodaysMarketTradingVolume()
      .subscribe((res: []) => this.marketVolumeRowData = this.getRowDataFromMarketTradingData(res));

      // todo - make quote an enum with other type options
    this.iexService.getBatchStocks(this.favoriteStocks, ['quote'])
      .subscribe((res) => {
        this.favoriteStocksRowData = this.getRowDataFromBatchStocks(res);
        this.isMarketOpen = Object.values(res)[0].quote.isUSMarketOpen;
      });
  }

  private getRowDataFromMarketTradingData(data) {
    return data.map(el => Object.assign({ venueName: el.venueName, volume: el.volume, marketPercent: el.marketPercent * 100}));
  }

  private getRowDataFromBatchStocks(data) {
    return Object.values(data).map((el: { quote: {[_: string]: {}} }) => Object.assign(
        { symbol: el.quote.symbol, latestPrice: el.quote.latestPrice, changePercent: (el.quote.changePercent as number) * 100
      }));
  }
}
