import { TestBed } from '@angular/core/testing';

import { LeisApiService } from './leis-api.service';

describe('LeisApiService', () => {
  let service: LeisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
