import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAudifonoPage } from './editar-audifono.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

describe('EditarAudifonoPage', () => {
  let component: EditarAudifonoPage;
  let fixture: ComponentFixture<EditarAudifonoPage>;
  let routerMock: jasmine.SpyObj<Router>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let camaraServiceMock: jasmine.SpyObj<CamaraService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1'), // Simula la obtención de un ID válido
        },
      },
    } as any;
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['obtenerProductoPorId', 'modificarProducto']);
    camaraServiceMock = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);

    // Mock para `obtenerProductoPorId` que devuelve una promesa resuelta
    serviceBDMock.obtenerProductoPorId.and.returnValue(
      Promise.resolve({
        id_producto: 1,
        nombre_prod: 'Audífonos',
        precio_prod: 50,
        stock_prod: 10,
        descripcion_prod: 'Audífonos Bluetooth',
        foto_prod: 'image_url',
      })
    );

    await TestBed.configureTestingModule({
      declarations: [EditarAudifonoPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: CamaraService, useValue: camaraServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAudifonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
