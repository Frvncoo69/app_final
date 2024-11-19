import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pc1Page } from './pc1.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertasService } from 'src/app/services/alertas.service';

describe('Pc1Page', () => {
  let component: Pc1Page;
  let fixture: ComponentFixture<Pc1Page>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['getCurrentNavigation']);
    const activatedRouteMock = jasmine.createSpyObj('ActivatedRoute', ['queryParams']);
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
          pcVa: { id_producto: 3, precio_prod: 1500 },
        },
      },
    });

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
