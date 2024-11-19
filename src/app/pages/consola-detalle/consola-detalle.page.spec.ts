import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConsolaDetallePage } from './consola-detalle.page';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from 'src/app/services/consolas.service';
import { of } from 'rxjs';

describe('ConsolaDetallePage', () => {
  let component: ConsolaDetallePage;
  let fixture: ComponentFixture<ConsolaDetallePage>;

  const mockConsolasService = jasmine.createSpyObj('ConsolasService', ['getConsolaById']);
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('1'), // Simula un ID válido
      },
    },
  };

  beforeEach(async () => {
    mockConsolasService.getConsolaById.and.returnValue(of({
      id: 1,
      nombre: 'Consola A',
      descripcion: 'Descripción de la consola A',
    }));

    await TestBed.configureTestingModule({
      declarations: [ConsolaDetallePage],
      providers: [
        { provide: ConsolasService, useValue: mockConsolasService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsolaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
