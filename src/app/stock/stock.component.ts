import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IexService } from '../iex.service';
import { of } from 'rxjs';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  // todo - create classes as necessary
  stockSym: string;
  stockData;
  companyData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  updateFlag = false;

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
        this.service.getStock(sym).subscribe((res: {[_: string]: {}}[]) => {
          this.stockData = res;
          const series = [];
          series.push({ name: 'High', type: 'line', data: res.map(el => el.high)} );
          series.push({ name: 'Low', type: 'line', data: res.map(el => el.low)} );
          const categories = res.map(el => el.date);
          this.chartOptions = this.getChartOptions(sym, series, categories);
          this.updateFlag = true;
        });
        this.service.getCompany(sym).subscribe(res => this.companyData = res);
        return of(true);
      }))
      .subscribe();
  }

  getChartOptions(title, series, categories) {
    return {
      title,
      yAxis: {
        title: {
            text: 'Price'
        }
      },
      series,
      xAxis: {categories}
    };
  }
}
