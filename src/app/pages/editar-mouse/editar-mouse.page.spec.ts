import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarMousePage } from './editar-mouse.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { of } from 'rxjs';

describe('EditarMousePage', () => {
  let component: EditarMousePage;
  let fixture: ComponentFixture<EditarMousePage>;
  let routerMock: jasmine.SpyObj<Router>;
  let activatedRouteMock: any;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let camaraServiceMock: jasmine.SpyObj<CamaraService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
    activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1'), // Simula que devuelve un ID válido
        },
      },
    };
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['obtenerProductoPorId', 'modificarProducto']);
    camaraServiceMock = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);

    await TestBed.configureTestingModule({
      declarations: [EditarMousePage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: CamaraService, useValue: camaraServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMousePage);
    component = fixture.componentInstance;

    // Simula la respuesta de `obtenerProductoPorId`
    serviceBDMock.obtenerProductoPorId.and.returnValue(
      Promise.resolve({
        id_producto: 1,
        nombre_prod: 'Mouse',
        precio_prod: 1000,
        stock_prod: 50,
        descripcion_prod: 'Un mouse de prueba',
        foto_prod: null,
      })
    );

    fixture.detectChanges(); // Ejecuta ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
