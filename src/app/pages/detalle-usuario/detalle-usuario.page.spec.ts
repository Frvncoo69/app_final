import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DetalleUsuarioPage } from './detalle-usuario.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';

describe('DetalleUsuarioPage', () => {
  let component: DetalleUsuarioPage;
  let fixture: ComponentFixture<DetalleUsuarioPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['someMethod']);
  const mockNativeStorage = jasmine.createSpyObj('NativeStorage', ['getItem', 'setItem']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
  const mockActivatedRoute = { queryParams: of({}) }; // Observable vacío
  const mockToastController = jasmine.createSpyObj('ToastController', ['create']);
  const mockAlertasService = jasmine.createSpyObj('AlertasService', ['presentAlert']);

  beforeEach(async () => {
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          editarUsuario: {
            id: 1,
            nombre: 'Usuario Prueba',
            email: 'usuario@prueba.com'
          }
        }
      }
    });

    await TestBed.configureTestingModule({
      declarations: [DetalleUsuarioPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: NativeStorage, useValue: mockNativeStorage },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ToastController, useValue: mockToastController },
        { provide: AlertasService, useValue: mockAlertasService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
