import { TestBed } from '@angular/core/testing';

import { ProductLoadAllService } from './product-load-all.service';

describe('ProductLoadAllService', () => {
  let service: ProductLoadAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLoadAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
