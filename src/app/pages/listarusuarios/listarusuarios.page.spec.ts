import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarusuariosPage } from './listarusuarios.page';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('ListarusuariosPage', () => {
  let component: ListarusuariosPage;
  let fixture: ComponentFixture<ListarusuariosPage>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let alertControllerMock: jasmine.SpyObj<AlertController>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['seleccionarUsuarios', 'eliminarUsuario']);
    alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ListarusuariosPage],
      providers: [
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
