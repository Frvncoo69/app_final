import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraPerfilService } from 'src/app/services/camara-perfil.service';
import { of } from 'rxjs';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  const mockActivatedRoute = {
    snapshot: { paramMap: { get: () => '1' } },
  };

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', [
    'consultarUsuarioConectado',
    'actualizarFotoPerfil',
    'actualizarEstadoUsuario2',
    'eliminarUsuario',
    'dbState',
  ]);

  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  const mockAlertController = jasmine.createSpyObj('AlertController', ['create']);
  const mockCamaraPerfilService = jasmine.createSpyObj('CamaraPerfilService', ['tomarFoto', 'seleccionarImagen']);

  beforeEach(async () => {
    // Mock data for the services
    mockServiceBDService.dbState.and.returnValue(of(true));
    mockServiceBDService.consultarUsuarioConectado.and.returnValue(
      Promise.resolve([
        {
          id_usu: 1,
          rut_usu: '12345678-9',
          nombre_usu: 'John',
          apellido_usu: 'Doe',
          nombre_usuario: 'johndoe',
          correo_usu: 'john@example.com',
          foto_usu: null,
          id_rol: 1,
        },
      ])
    );

    mockAlertController.create.and.returnValue(
      Promise.resolve({
        present: () => Promise.resolve(),
        dismiss: () => Promise.resolve(),
      } as any)
    );

    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: Router, useValue: mockRouter },
        { provide: AlertController, useValue: mockAlertController },
        { provide: CamaraPerfilService, useValue: mockCamaraPerfilService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
