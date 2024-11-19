import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Sillas1Page } from './sillas1.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

describe('Sillas1Page', () => {
  let component: Sillas1Page;
  let fixture: ComponentFixture<Sillas1Page>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    const activatedRouteMock = {
      queryParams: of({}), // Simula el observable `queryParams`
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

    // Simula valores retornados por los métodos
    serviceBDMock.dbState.and.returnValue(of(true)); // Simula que la BD está lista
    serviceBDMock.obtenerIdUsuarioLogueado.and.returnValue(Promise.resolve(1));
    serviceBDMock.verificarOCrearVenta.and.returnValue(Promise.resolve(123));
    serviceBDMock.consultarProdsCarro.and.returnValue(Promise.resolve(false));

    // Simulación de navegación
    routerMock.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          sillaVa: { id_producto: 4, precio_prod: 1200 },
        },
      },
    });

    await TestBed.configureTestingModule({
      declarations: [Sillas1Page],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: NativeStorage, useValue: nativeStorageMock },
        { provide: ToastController, useValue: toastControllerMock },
        { provide: AlertasService, useValue: alertasServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Sillas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
