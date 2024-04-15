import { TestBed } from '@angular/core/testing';

import { ProductAmountService } from './product-amount.service';

describe('ProductAmountService', () => {
  let service: ProductAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
