import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockComponent ],
      imports: [
        HighchartsChartModule,
        RouterTestingModule,
        AgGridModule.withComponents([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get chart options and set title', () => {
    expect(component.getChartOptions('title', [], [])).toEqual(getChartMock());
  });

  it('should get chart options and set series', () => {
    const chartMock = getChartMock();
    chartMock.series.push({data: [1, 2, 3]});
    expect(component.getChartOptions('title', [{data: [1, 2, 3]}], [])).toEqual(chartMock);
  });

  it('should get chart options and categories', () => {
    const chartMock = getChartMock();
    chartMock.xAxis.categories.push({data: [1, 2, 3]});
    expect(component.getChartOptions('title', [], [{data: [1, 2, 3]}])).toEqual(chartMock);
  });

  function getChartMock() {
    return {
      title: 'title',
      yAxis: {
        title: {
            text: 'Price'
        }
      },
      series: [],
      xAxis: { categories: [] }
    };
  }
});
