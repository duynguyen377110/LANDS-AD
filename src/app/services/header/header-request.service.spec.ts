import { TestBed } from '@angular/core/testing';

import { HeaderRequestService } from './header-request.service';

describe('HeaderRequestService', () => {
  let service: HeaderRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
