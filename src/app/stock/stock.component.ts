import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IexService } from '../iex.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  // todo - create a class
  stockData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: IexService
  ) {}

  ngOnInit() {
    this.stockData = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          console.log(params);
          return this.service.getStock(params.get('symbol'));
        })).subscribe(res => console.log(res));
  }
}
