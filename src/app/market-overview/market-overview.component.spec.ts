import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOverviewComponent } from './market-overview.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MarketOverviewComponent', () => {
  let component: MarketOverviewComponent;
  let fixture: ComponentFixture<MarketOverviewComponent>;

  // todo - move this to a json file for testing
  const marketDataMock = [
    {
      "mic": "TRF",
      "tapeId": "0",
      "venueName": "VRelmuo FT",
      "volume": 3033194536,
      "tapeA": 1406339317,
      "tapeB": 589838430,
      "tapeC": 990309803,
      "marketPercent": 0.37211,
      "lastUpdated": 1626515650430
    },
    {
      "mic": "GXSN",
      "tapeId": "Q",
      "venueName": "NDAQSA",
      "volume": 1361017119,
      "tapeA": 437631654,
      "tapeB": 247335326,
      "tapeC": 631433762,
      "marketPercent": 0.1672,
      "lastUpdated": 1658445414877
    },
    {
      "mic": "NXYS",
      "tapeId": "N",
      "venueName": "NSEY",
      "volume": 995923351,
      "tapeA": 917037492,
      "tapeB": 63148784,
      "tapeC": 41445673,
      "marketPercent": 0.13048,
      "lastUpdated": 1604149049649
    },
    {
      "mic": "RCAX",
      "tapeId": "P",
      "venueName": "rYNSac EA",
      "volume": 712222003,
      "tapeA": 182198293,
      "tapeB": 347091130,
      "tapeC": 164335169,
      "marketPercent": 0.08999,
      "lastUpdated": 1589334463459
    },
    {
      "mic": "BTSA",
      "tapeId": "Z",
      "venueName": "SXZATBB ",
      "volume": 518522181,
      "tapeA": 239342879,
      "tapeB": 123037082,
      "tapeC": 149583599,
      "marketPercent": 0.06474,
      "lastUpdated": 1640232548514
    },
    {
      "mic": "EDXG",
      "tapeId": "K",
      "venueName": "DGXE",
      "volume": 468123258,
      "tapeA": 192743442,
      "tapeB": 119691479,
      "tapeC": 152781728,
      "marketPercent": 0.05991,
      "lastUpdated": 1634608217883
    },
    {
      "mic": "IEXG",
      "tapeId": "V",
      "venueName": "EIX",
      "volume": 219659254,
      "tapeA": 129306404,
      "tapeB": 22991136,
      "tapeC": 67611413,
      "marketPercent": 0.0279,
      "lastUpdated": 1628054954246
    },
    {
      "mic": "YATB",
      "tapeId": "Y",
      "venueName": "XSYTBA B",
      "volume": 208721717,
      "tapeA": 90675564,
      "tapeB": 68523592,
      "tapeC": 49823447,
      "marketPercent": 0.02672,
      "lastUpdated": 1639980683958
    },
    {
      "mic": "GAED",
      "tapeId": "J",
      "venueName": "EAGD",
      "volume": 199745747,
      "tapeA": 123672215,
      "tapeB": 29012314,
      "tapeC": 50074401,
      "marketPercent": 0.02499,
      "lastUpdated": 1657325441447
    },
    {
      "mic": "ICXS",
      "tapeId": "C",
      "venueName": "NaSNYla ntoiE",
      "volume": 166560170,
      "tapeA": 86309831,
      "tapeB": 48052175,
      "tapeC": 31243982,
      "marketPercent": 0.02146,
      "lastUpdated": 1591607753826
    },
    {
      "mic": "BOXS",
      "tapeId": "B",
      "venueName": "QSADNB XA",
      "volume": 114890276,
      "tapeA": 54628911,
      "tapeB": 30682375,
      "tapeC": 28315283,
      "marketPercent": 0.01486,
      "lastUpdated": 1597963371203
    },
    {
      "mic": "HXPL",
      "tapeId": "X",
      "venueName": "XND QSSPAA",
      "volume": 67236079,
      "tapeA": 23322518,
      "tapeB": 27657572,
      "tapeC": 15037486,
      "marketPercent": 0.00854,
      "lastUpdated": 1658146772125
    },
    {
      "mic": "CHXI",
      "tapeId": "M",
      "venueName": "XCH",
      "volume": 31077043,
      "tapeA": 13480298,
      "tapeB": 9350326,
      "tapeC": 8619303,
      "marketPercent": 0.0041,
      "lastUpdated": 1606161657358
    },
    {
      "mic": "SEXA",
      "tapeId": "A",
      "venueName": "aAc NYESenirm",
      "volume": 31463021,
      "tapeA": 6177430,
      "tapeB": 21882010,
      "tapeC": 2917334,
      "marketPercent": 0.00391,
      "lastUpdated": 1620147543497
    }
  ];

  const marketVolumeRowDataMock = [
    {
      "venueName": "VRelmuo FT",
      "volume": 3033194536,
      "marketPercent": 37.211
    },
    {
      "venueName": "NDAQSA",
      "volume": 1361017119,
      "marketPercent": 16.72
    },
    {
      "venueName": "NSEY",
      "volume": 995923351,
      "marketPercent": 13.048000000000002
    },
    {
      "venueName": "rYNSac EA",
      "volume": 712222003,
      "marketPercent": 8.999
    },
    {
      "venueName": "SXZATBB ",
      "volume": 518522181,
      "marketPercent": 6.474
    },
    {
      "venueName": "DGXE",
      "volume": 468123258,
      "marketPercent": 5.991
    },
    {
      "venueName": "EIX",
      "volume": 219659254,
      "marketPercent": 2.79
    },
    {
      "venueName": "XSYTBA B",
      "volume": 208721717,
      "marketPercent": 2.672
    },
    {
      "venueName": "EAGD",
      "volume": 199745747,
      "marketPercent": 2.4989999999999997
    },
    {
      "venueName": "NaSNYla ntoiE",
      "volume": 166560170,
      "marketPercent": 2.146
    },
    {
      "venueName": "QSADNB XA",
      "volume": 114890276,
      "marketPercent": 1.486
    },
    {
      "venueName": "XND QSSPAA",
      "volume": 67236079,
      "marketPercent": 0.8540000000000001
    },
    {
      "venueName": "XCH",
      "volume": 31077043,
      "marketPercent": 0.41000000000000003
    },
    {
      "venueName": "aAc NYESenirm",
      "volume": 31463021,
      "marketPercent": 0.391
    }
  ];

  const batchStockDataMock = {
    "GOOG": {
      "quote": {
        "symbol": "GOOG",
        "companyName": "Alphabet, Inc.",
        "primaryExchange": "ASQDNA",
        "calculationPrice": "close",
        "open": 1440.33,
        "openTime": 1580739578370,
        "close": 1465.62,
        "closeTime": 1608820302123,
        "high": 1504.14,
        "low": 1467,
        "latestPrice": 1462.65,
        "latestSource": "Close",
        "latestTime": "January 30, 2020",
        "latestUpdate": 1645951681542,
        "latestVolume": 1363134,
        "iexRealtimePrice": 1497.4,
        "iexRealtimeSize": 34,
        "iexLastUpdated": 1602091443474,
        "delayedPrice": 1477.6,
        "delayedPriceTime": 1585839839609,
        "extendedPrice": 1509,
        "extendedChange": 18.7,
        "extendedChangePercent": 0.01251,
        "extendedPriceTime": 1603640931747,
        "previousClose": 1495.14,
        "previousVolume": 1099095,
        "change": -2.83,
        "changePercent": -0.00196,
        "volume": 1378836,
        "iexMarketPercent": 0.03223149838154215,
        "iexVolume": 43031,
        "avgTotalVolume": 1521810,
        "iexBidPrice": 0,
        "iexBidSize": 0,
        "iexAskPrice": 0,
        "iexAskSize": 0,
        "marketCap": 1026512888061,
        "peRatio": 32.43,
        "week52High": 1510.91,
        "week52Low": 1060,
        "ytdChange": 0.067399,
        "lastTradeTime": 1614282951631,
        "isUSMarketOpen": false
      }
    },
    "AAPL": {
      "quote": {
        "symbol": "AAPL",
        "companyName": "Apple, Inc.",
        "primaryExchange": "SAQADN",
        "calculationPrice": "close",
        "open": 326.95,
        "openTime": 1595564940396,
        "close": 337.3,
        "closeTime": 1649713098644,
        "high": 329.97,
        "low": 333.41,
        "latestPrice": 336.03,
        "latestSource": "Close",
        "latestTime": "January 30, 2020",
        "latestUpdate": 1622455869555,
        "latestVolume": 32609690,
        "iexRealtimePrice": 328.929,
        "iexRealtimeSize": 29,
        "iexLastUpdated": 1642441876258,
        "delayedPrice": 335.45,
        "delayedPriceTime": 1645261721993,
        "extendedPrice": 339.3,
        "extendedChange": -0.27,
        "extendedChangePercent": -0.00087,
        "extendedPriceTime": 1594124419570,
        "previousClose": 333.69,
        "previousVolume": 56315538,
        "change": -0.48,
        "changePercent": -0.00149,
        "volume": 32505061,
        "iexMarketPercent": 0.008324025945503057,
        "iexVolume": 260820,
        "avgTotalVolume": 34422393,
        "iexBidPrice": 0,
        "iexBidSize": 0,
        "iexAskPrice": 0,
        "iexAskSize": 0,
        "marketCap": 1455954485336,
        "peRatio": 26.53,
        "week52High": 340.79,
        "week52Low": 167.64,
        "ytdChange": 0.08099502033700577,
        "lastTradeTime": 1613431889000,
        "isUSMarketOpen": false
      }
    },
    "SNAP": {
      "quote": {
        "symbol": "SNAP",
        "companyName": "Snap, Inc.",
        "primaryExchange": "wthYNc Exeoeg cnaSkkr o",
        "calculationPrice": "close",
        "open": 19.57,
        "openTime": 1601681880290,
        "close": 19.25,
        "closeTime": 1642231411108,
        "high": 19.801,
        "low": 18.99,
        "latestPrice": 19.15,
        "latestSource": "Close",
        "latestTime": "January 30, 2020",
        "latestUpdate": 1653826100002,
        "latestVolume": 17533611,
        "iexRealtimePrice": 19.314,
        "iexRealtimeSize": 101,
        "iexLastUpdated": 1584622887828,
        "delayedPrice": 19.8,
        "delayedPriceTime": 1621399237912,
        "extendedPrice": 19.26,
        "extendedChange": 0,
        "extendedChangePercent": 0,
        "extendedPriceTime": 1586150419219,
        "previousClose": 20.02,
        "previousVolume": 18522783,
        "change": -0.27,
        "changePercent": -0.01366,
        "volume": 17171798,
        "iexMarketPercent": 0.03051462090648315,
        "iexVolume": 510869,
        "avgTotalVolume": 24194418,
        "iexBidPrice": 0,
        "iexBidSize": 0,
        "iexAskPrice": 0,
        "iexAskSize": 0,
        "marketCap": 26485431632,
        "peRatio": -26.61,
        "week52High": 20.23,
        "week52Low": 6.59,
        "ytdChange": 0.12862147152190992,
        "lastTradeTime": 1635414483209,
        "isUSMarketOpen": false
      }
    }
  };

  const batchStockRowDataMock = [
    {
      "symbol": "GOOG",
      "latestPrice": 1462.65,
      "changePercent": -0.196
    },
    {
      "symbol": "AAPL",
      "latestPrice": 336.03,
      "changePercent": -0.149
    },
    {
      "symbol": "SNAP",
      "latestPrice": 19.15,
      "changePercent": -1.366
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketOverviewComponent ],
      imports: [
        AgGridModule.withComponents([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get row data from market trading data', () => {
    expect(component['getRowDataFromMarketTradingData'](marketDataMock)).toEqual(marketVolumeRowDataMock);
  });

  it('should get row data from batch stock data', () => {
    expect(component['getRowDataFromBatchStocks'](batchStockDataMock)).toEqual(batchStockRowDataMock);
  });
});
