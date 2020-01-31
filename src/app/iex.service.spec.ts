import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IexService } from './iex.service';

describe('IexService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: IexService = TestBed.get(IexService);
    expect(service).toBeTruthy();
  });
});
