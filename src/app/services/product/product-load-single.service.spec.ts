import { TestBed } from '@angular/core/testing';

import { ProductLoadSingleService } from './product-load-single.service';

describe('ProductLoadSingleService', () => {
  let service: ProductLoadSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLoadSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
