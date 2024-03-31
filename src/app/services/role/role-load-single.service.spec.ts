import { TestBed } from '@angular/core/testing';

import { RoleLoadSingleService } from './role-load-single.service';

describe('RoleLoadSingleService', () => {
  let service: RoleLoadSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleLoadSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
