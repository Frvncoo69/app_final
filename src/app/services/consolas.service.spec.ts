import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Módulo de pruebas para HttpClient
import { ConsolasService } from './consolas.service';

describe('ConsolasService', () => {
  let service: ConsolasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Agregar HttpClientTestingModule para pruebas con HttpClient
      providers: [ConsolasService], // Registrar el servicio
    });
    service = TestBed.inject(ConsolasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

