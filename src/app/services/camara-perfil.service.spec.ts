import { TestBed } from '@angular/core/testing';

import { CamaraPerfilService } from './camara-perfil.service';

describe('CamaraPerfilService', () => {
  let service: CamaraPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamaraPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
