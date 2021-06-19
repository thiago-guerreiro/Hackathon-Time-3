import { TestBed } from '@angular/core/testing';

import { InsitituicoesApiService } from './instituicoes-api.service';

describe('InstituicoesApiService', () => {
  let service: InsitituicoesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsitituicoesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
