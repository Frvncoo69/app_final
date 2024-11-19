import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditarMonitorPage } from './editar-monitor.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { of } from 'rxjs';

describe('EditarMonitorPage', () => {
  let component: EditarMonitorPage;
  let fixture: ComponentFixture<EditarMonitorPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['obtenerProductoPorId', 'modificarProducto']);
  const mockCamaraService = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('1'), // Simula un ID válido
      },
    },
  };

  beforeEach(async () => {
    mockServiceBDService.obtenerProductoPorId.and.returnValue(
      Promise.resolve({
        id_producto: 1,
        nombre_prod: 'Monitor A',
        precio_prod: 200,
        stock_prod: 10,
        descripcion_prod: 'Descripción del monitor',
        foto_prod: 'url/to/image.jpg',
      })
    );
    mockServiceBDService.modificarProducto.and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      declarations: [EditarMonitorPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: CamaraService, useValue: mockCamaraService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
