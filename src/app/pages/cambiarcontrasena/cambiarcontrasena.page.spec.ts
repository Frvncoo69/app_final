import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcontrasenaPage } from './cambiarcontrasena.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('CambiarcontrasenaPage', () => {
  let component: CambiarcontrasenaPage;
  let fixture: ComponentFixture<CambiarcontrasenaPage>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const serviceBDMock = jasmine.createSpyObj('ServiceBDService', [
      'consultarUsuariosPorEstadoConectado',
      'obtenerUsuarioPorCorreo',
    ]);

    serviceBDMock.consultarUsuariosPorEstadoConectado.and.returnValue(Promise.resolve([{ correo_usu: 'test@example.com' }]));
    serviceBDMock.obtenerUsuarioPorCorreo.and.returnValue(Promise.resolve({ correo_usu: 'test@example.com', clave_usu: '1234' }));

    await TestBed.configureTestingModule({
      declarations: [CambiarcontrasenaPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarcontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

