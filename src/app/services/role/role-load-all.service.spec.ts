import { TestBed } from '@angular/core/testing';

import { RoleLoadAllService } from './role-load-all.service';

describe('RoleLoadAllService', () => {
  let service: RoleLoadAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleLoadAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
