import { TestBed } from '@angular/core/testing';

import { CategoryAmountService } from './category-amount.service';

describe('CategoryAmountService', () => {
  let service: CategoryAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
