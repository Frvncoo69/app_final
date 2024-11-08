import { TestBed } from '@angular/core/testing';

import { ApiNativaService } from './api-nativa.service';

describe('ApiNativaService', () => {
  let service: ApiNativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
