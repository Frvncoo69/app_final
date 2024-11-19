import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudtecladosPage } from './crudteclados.page';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('CrudtecladosPage', () => {
  let component: CrudtecladosPage;
  let fixture: ComponentFixture<CrudtecladosPage>;

  beforeEach(async () => {
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const serviceBDMock = jasmine.createSpyObj('ServiceBDService', [
      'dbState',
      'fetchlistadoTeclados',
      'seleccionarTeclados',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CrudtecladosPage],
      providers: [
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudtecladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

