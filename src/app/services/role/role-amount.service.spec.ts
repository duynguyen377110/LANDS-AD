import { TestBed } from '@angular/core/testing';

import { RoleAmountService } from './role-amount.service';

describe('RoleAmountService', () => {
  let service: RoleAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
