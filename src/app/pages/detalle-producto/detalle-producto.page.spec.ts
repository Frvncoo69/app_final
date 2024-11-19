import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DetalleProductoPage } from './detalle-producto.page';
import { ActivatedRoute, Router, Navigation, UrlTree } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { of } from 'rxjs';

describe('DetalleProductoPage', () => {
  let component: DetalleProductoPage;
  let fixture: ComponentFixture<DetalleProductoPage>;
  let routerMock: jasmine.SpyObj<Router>;
  let activatedRouteMock: any;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['getCurrentNavigation', 'createUrlTree']);
    activatedRouteMock = {
      queryParams: of({}),
    };
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', [
      'agregarDetalleVenta',
      'cargarProductoUnico',
    ]);

    const urlTreeMock: UrlTree = {
      root: null,
      queryParams: {},
      fragment: null,
      toString: () => '/mocked-url',
    } as unknown as UrlTree;

    routerMock.createUrlTree.and.returnValue(urlTreeMock);
    routerMock.getCurrentNavigation.and.returnValue({
      id: 1,
      initialUrl: urlTreeMock,
      extractedUrl: urlTreeMock,
      trigger: 'imperative',
      previousNavigation: null,
      extras: {
        state: {
          productoVa: { id_producto: 1, nombre: 'Teclado', precio_prod: 100 },
        },
      },
    } as Navigation);

    await TestBed.configureTestingModule({
      declarations: [DetalleProductoPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
