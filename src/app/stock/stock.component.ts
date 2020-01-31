import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IexService } from '../iex.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  // todo - create a class
  stockSym: string;
  stockData;
  companyData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: IexService
  ) {}

  ngOnInit() {
    this.stockData = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const sym = params.get('symbol');
        this.stockSym = sym;
        this.service.getStock(sym).subscribe(res => this.stockData = res);
        this.service.getCompany(sym).subscribe(res => this.companyData = res);
        return of(true);
      }))
      .subscribe();
  }
}
