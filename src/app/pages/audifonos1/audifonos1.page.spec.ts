import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Audifonos1Page } from './audifonos1.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

describe('Audifonos1Page', () => {
  let component: Audifonos1Page;
  let fixture: ComponentFixture<Audifonos1Page>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    const activatedRouteMock = {
      queryParams: of({}), // Simula que queryParams devuelve un observable vacío
    };
    const serviceBDMock = jasmine.createSpyObj('ServiceBDService', [
      'dbState',
      'obtenerIdUsuarioLogueado',
      'verificarOCrearVenta',
      'crearVenta',
      'agregarDetalleVenta',
      'preciofinal',
      'consultarProdsCarro',
    ]);
    const nativeStorageMock = jasmine.createSpyObj('NativeStorage', ['getItem']);
    const toastControllerMock = jasmine.createSpyObj('ToastController', ['create']);
    const alertasServiceMock = jasmine.createSpyObj('AlertasService', ['presentAlert']);

    routerMock.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          audifonoVa: { id_producto: 1, precio_prod: 500 },
        },
      },
    });

    serviceBDMock.dbState.and.returnValue(of(true)); // Simula que dbState devuelve un observable válido

    await TestBed.configureTestingModule({
      declarations: [Audifonos1Page],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: NativeStorage, useValue: nativeStorageMock },
        { provide: ToastController, useValue: toastControllerMock },
        { provide: AlertasService, useValue: alertasServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Audifonos1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
