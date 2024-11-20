import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevacontrasenaPage } from './nuevacontrasena.page';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { of } from 'rxjs';

describe('NuevacontrasenaPage', () => {
  let component: NuevacontrasenaPage;
  let fixture: ComponentFixture<NuevacontrasenaPage>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('test@example.com'),
        },
      },
    };
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const serviceBDMock = jasmine.createSpyObj('ServiceBDService', [
      'obtenerUsuarioPorCorreo2',
      'actualizarContrasena',
    ]);

    // Mock para `obtenerUsuarioPorCorreo2`
    serviceBDMock.obtenerUsuarioPorCorreo2.and.returnValue(
      Promise.resolve({ id_usu: 1, correo: 'test@example.com' })
    );

    // Mock para `actualizarContrasena`
    serviceBDMock.actualizarContrasena.and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      declarations: [NuevacontrasenaPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevacontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar una alerta si las contraseñas no coinciden', async () => {
    // Configuramos las contraseñas para que no coincidan
    component.nuevaContrasena = 'Password123!';
    component.confirmarContrasena = 'Password456!';
  
    spyOn(component, 'presentAlert'); // Espiar el método `presentAlert`
  
    await component.cambiarContrasena();
  
    // Verificar que se llama a `presentAlert` con el mensaje correcto
    expect(component.presentAlert).toHaveBeenCalledWith(
      'Error',
      'Las contraseñas no coinciden. Intente nuevamente.'  // Asegúrate que esta cadena sea correcta
    );
  });
  
});

