import { TestBed } from '@angular/core/testing';

import { CoinPorClick } from './coin-por-click';

describe('CoinPorClick', () => {
  let service: CoinPorClick;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinPorClick);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
