import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditarSillasPage } from './editar-sillas.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditarSillasPage', () => {
  let component: EditarSillasPage;
  let fixture: ComponentFixture<EditarSillasPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['obtenerProductoPorId', 'modificarProducto']);
  const mockCamaraService = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('1') // Simula un ID de producto
      }
    }
  };

  beforeEach(async () => {
    mockServiceBDService.obtenerProductoPorId.and.returnValue(Promise.resolve({
      id_producto: 1,
      nombre_prod: 'Silla Ergonomica',
      precio_prod: 150,
      stock_prod: 10,
      descripcion_prod: 'Silla cómoda para oficina',
      foto_prod: 'imagen.jpg',
    }));

    await TestBed.configureTestingModule({
      declarations: [EditarSillasPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: CamaraService, useValue: mockCamaraService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarSillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
