import { TestBed } from '@angular/core/testing';

import { CoinPorSegundo } from './coin-por-segundo';

describe('CoinPorSegundo', () => {
  let service: CoinPorSegundo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinPorSegundo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
