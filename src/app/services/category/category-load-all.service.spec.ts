import { TestBed } from '@angular/core/testing';

import { CategoryLoadAllService } from './category-load-all.service';

describe('CategoryLoadAllService', () => {
  let service: CategoryLoadAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryLoadAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
