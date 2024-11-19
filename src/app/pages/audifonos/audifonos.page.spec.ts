import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AudifonosPage } from './audifonos.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

describe('AudifonosPage', () => {
  let component: AudifonosPage;
  let fixture: ComponentFixture<AudifonosPage>;

  const mockServiceBDService = {
    seleccionarAudifonos: jasmine.createSpy('seleccionarAudifonos').and.returnValue(Promise.resolve([
      { id: 1, nombre: 'Audífono 1', precio: 100 },
      { id: 2, nombre: 'Audífono 2', precio: 200 }
    ]))
  };

  const mockAlertController = jasmine.createSpyObj('AlertController', ['create']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudifonosPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: AlertController, useValue: mockAlertController },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AudifonosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
