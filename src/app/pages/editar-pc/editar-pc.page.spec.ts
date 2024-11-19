import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPcPage } from './editar-pc.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { of } from 'rxjs';

describe('EditarPcPage', () => {
  let component: EditarPcPage;
  let fixture: ComponentFixture<EditarPcPage>;
  let routerMock: jasmine.SpyObj<Router>;
  let activatedRouteMock: any;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let camaraServiceMock: jasmine.SpyObj<CamaraService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
    activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1'), // Simula el ID del producto
        },
      },
    };
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', [
      'obtenerProductoPorId',
      'modificarProducto',
    ]);
    camaraServiceMock = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);

    // Simulación de datos para obtenerProductoPorId
    serviceBDMock.obtenerProductoPorId.and.returnValue(
      Promise.resolve({
        id_producto: 1,
        nombre_prod: 'PC Gamer',
        precio_prod: 1500,
        stock_prod: 10,
        descripcion_prod: 'PC para videojuegos',
        foto_prod: new Blob(['mock image'], { type: 'image/png' }),
      })
    );

    await TestBed.configureTestingModule({
      declarations: [EditarPcPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: CamaraService, useValue: camaraServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
