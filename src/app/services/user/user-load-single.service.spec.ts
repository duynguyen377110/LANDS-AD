import { TestBed } from '@angular/core/testing';

import { UserLoadSingleService } from './user-load-single.service';

describe('UserLoadSingleService', () => {
  let service: UserLoadSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoadSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
