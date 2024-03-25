import { TestBed } from '@angular/core/testing';

import { CategoryLoadSingleService } from './category-load-single.service';

describe('CategoryLoadSingleService', () => {
  let service: CategoryLoadSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryLoadSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
