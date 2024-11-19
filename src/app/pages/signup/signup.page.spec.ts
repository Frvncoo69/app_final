import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SignupPage } from './signup.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['obtenerUsuarioPorCorreo', 'insertarUsuarioConSeguridad']);
  const mockAlertController = jasmine.createSpyObj('AlertController', ['create']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    mockServiceBDService.obtenerUsuarioPorCorreo.and.returnValue(Promise.resolve(null)); // Simula que el correo no existe
    mockServiceBDService.insertarUsuarioConSeguridad.and.returnValue(Promise.resolve());

    mockAlertController.create.and.returnValue(Promise.resolve({
      present: jasmine.createSpy('present'),
    }));

    await TestBed.configureTestingModule({
      declarations: [SignupPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: AlertController, useValue: mockAlertController },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('debería mostrar una alerta si los campos obligatorios están vacíos', async () => {
    // Dejamos todos los campos vacíos para simular el caso
    component.rut = '';
    component.nombre = '';
    component.apellido = '';
    component.nombreUsuario = '';
    component.correo = '';
    component.contrasena = '';
    component.validarContrasena = '';
    component.preguntaSeguridad = '';
    component.respuestaSeguridad = '';
  
    spyOn(component, 'presentAlert'); // Espiar el método para verificar su llamada
  
    await component.crearCuenta();
  
    // Verificar que se llamó a `presentAlert` con el mensaje esperado
    expect(component.presentAlert).toHaveBeenCalledWith('Error', 'Todos los campos son obligatorios.');
  });
  

});
