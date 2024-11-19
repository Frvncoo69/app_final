import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditarPage } from './editar.page';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('EditarPage', () => {
  let component: EditarPage;
  let fixture: ComponentFixture<EditarPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['obtenerUsuario', 'modificarUsuario']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  const mockAlertController = jasmine.createSpyObj('AlertController', ['create']);
  const mockToastController = jasmine.createSpyObj('ToastController', ['create']);

  beforeEach(async () => {
    mockServiceBDService.obtenerUsuario.and.returnValue(Promise.resolve({
      id_usu: '123',
      rut_usu: '12345678-9',
      nombre_usu: 'John',
      apellido_usu: 'Doe',
      correo_usu: 'john.doe@example.com',
      nombre_usuario: 'johndoe',
    }));
    mockServiceBDService.modificarUsuario.and.returnValue(Promise.resolve());

    mockAlertController.create.and.returnValue(Promise.resolve({
      present: jasmine.createSpy('present')
    }));
    mockToastController.create.and.returnValue(Promise.resolve({
      present: jasmine.createSpy('present')
    }));

    await TestBed.configureTestingModule({
      declarations: [EditarPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: Router, useValue: mockRouter },
        { provide: AlertController, useValue: mockAlertController },
        { provide: ToastController, useValue: mockToastController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
