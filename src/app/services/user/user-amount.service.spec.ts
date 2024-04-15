import { TestBed } from '@angular/core/testing';

import { UserAmountService } from './user-amount.service';

describe('UserAmountService', () => {
  let service: UserAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
