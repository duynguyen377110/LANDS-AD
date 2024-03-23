import { TestBed } from '@angular/core/testing';

import { HttpSendFileService } from './http-send-file.service';

describe('HttpSendFileService', () => {
  let service: HttpSendFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSendFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
