import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IexService {

  constructor(private http: HttpClient) { }

  getTodaysMarketTradingVolume() {
    return this.http.get('https://sandbox.iexapis.com/stable/stock/IBM/quote?token=Tpk_896327e3ef09470f9c5938b42620fd5f');
  }
}
