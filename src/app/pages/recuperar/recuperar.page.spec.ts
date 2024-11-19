import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { of } from 'rxjs';

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;
  let routerMock: jasmine.SpyObj<Router>;
  let alertControllerMock: jasmine.SpyObj<AlertController>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['obtenerUsuarioPorCorreo']);

    // Configuración del mock de AlertController para retornar un alert simulado
    alertControllerMock.create.and.returnValue(
      Promise.resolve({
        present: jasmine.createSpy('present'),
      } as any)
    );

    await TestBed.configureTestingModule({
      declarations: [RecuperarPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar una alerta si el correo electrónico no contiene "@"', async () => {
    component.correo = 'invalidemail.com'; // Correo sin el carácter '@'
  
    const alertSpy = TestBed.inject(AlertController).create; // Espiar `create` de `AlertController`
  
    await component.verificarCorreo();
  
    // Verificar que `create` del AlertController fue llamado
    expect(alertSpy).toHaveBeenCalledWith({
      header: 'Error',
      message: 'Ingrese un correo electrónico válido.',
      buttons: ['OK'],
    });
  });
  
});

