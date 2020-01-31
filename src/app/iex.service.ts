import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IexService {

  // todo - move these to json/configs
  baseUrl = 'https://sandbox.iexapis.com/stable';
  tokenParam = 'token=Tpk_896327e3ef09470f9c5938b42620fd5f';
  constructor(private http: HttpClient) { }

  getTodaysMarketTradingVolume() {
    return this.http.get(`${this.baseUrl}/stock/market/volume?${this.tokenParam}`);
  }

  getBatchStocks(stocks: string [], types: string []) {
    return this.http.get(`${this.baseUrl}/stock/market/batch?types=${types}&symbols=${stocks.join(',')}&${this.tokenParam}`);
  }
}
