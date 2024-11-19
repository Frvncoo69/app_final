import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Teclado1Page } from './teclado1.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

describe('Teclado1Page', () => {
  let component: Teclado1Page;
  let fixture: ComponentFixture<Teclado1Page>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', [
    'dbState',
    'obtenerIdUsuarioLogueado',
    'verificarOCrearVenta',
    'crearVenta',
    'agregarDetalleVenta',
    'preciofinal',
    'consultarProdsCarro'
  ]);
  const mockNativeStorage = jasmine.createSpyObj('NativeStorage', ['getItem', 'setItem']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
  const mockActivatedRoute = { queryParams: of({}) };
  const mockToastController = jasmine.createSpyObj('ToastController', ['create']);
  const mockAlertasService = jasmine.createSpyObj('AlertasService', ['presentAlert']);

  beforeEach(async () => {
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          tecladoVa: {
            id_producto: 1,
            precio_prod: 500,
          }
        }
      }
    });

    mockServiceBDService.dbState.and.returnValue(of(true));
    mockServiceBDService.obtenerIdUsuarioLogueado.and.returnValue(Promise.resolve(1));
    mockServiceBDService.verificarOCrearVenta.and.returnValue(Promise.resolve(101));
    mockServiceBDService.agregarDetalleVenta.and.returnValue(Promise.resolve());
    mockServiceBDService.preciofinal.and.returnValue(Promise.resolve(500));
    mockServiceBDService.consultarProdsCarro.and.returnValue(Promise.resolve(false));

    await TestBed.configureTestingModule({
      declarations: [Teclado1Page],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: NativeStorage, useValue: mockNativeStorage },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ToastController, useValue: mockToastController },
        { provide: AlertasService, useValue: mockAlertasService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Teclado1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
