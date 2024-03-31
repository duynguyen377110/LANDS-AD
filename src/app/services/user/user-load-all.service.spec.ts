import { TestBed } from '@angular/core/testing';

import { UserLoadAllService } from './user-load-all.service';

describe('UserLoadAllService', () => {
  let service: UserLoadAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoadAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
