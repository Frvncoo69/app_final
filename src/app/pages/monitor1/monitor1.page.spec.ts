import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Monitor1Page } from './monitor1.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

describe('Monitor1Page', () => {
  let component: Monitor1Page;
  let fixture: ComponentFixture<Monitor1Page>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    const activatedRouteMock = {
      queryParams: of({}), // Simulamos que queryParams devuelve un observable vacío
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

    // Configurar el mock de getCurrentNavigation
    routerMock.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          monitorVa: { id_producto: 2, precio_prod: 2000 },
        },
      },
    });

    // Configurar el mock de dbState para devolver un observable válido
    serviceBDMock.dbState.and.returnValue(of(true));

    await TestBed.configureTestingModule({
      declarations: [Monitor1Page],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: NativeStorage, useValue: nativeStorageMock },
        { provide: ToastController, useValue: toastControllerMock },
        { provide: AlertasService, useValue: alertasServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Monitor1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
