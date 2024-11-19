import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Pc1Page } from './pc1.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

describe('Pc1Page', () => {
  let component: Pc1Page;
  let fixture: ComponentFixture<Pc1Page>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    const activatedRouteMock = {
      queryParams: of({}) // Simula el observable `queryParams`
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

    // Simulación de navegación
    routerMock.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          pcVa: { id_producto: 3, precio_prod: 1500 },
        },
      },
    });

    // Simulación del estado de la base de datos
    serviceBDMock.dbState.and.returnValue(of(true));

    await TestBed.configureTestingModule({
      declarations: [Pc1Page],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: NativeStorage, useValue: nativeStorageMock },
        { provide: ToastController, useValue: toastControllerMock },
        { provide: AlertasService, useValue: alertasServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Pc1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
