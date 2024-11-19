import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NuevaPage } from './nueva.page';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

describe('NuevaPage', () => {
  let component: NuevaPage;
  let fixture: ComponentFixture<NuevaPage>;

  const mockRouter = jasmine.createSpyObj('Router', ['getCurrentNavigation', 'navigate']);
  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['actualizarContrasena']);
  const mockAlertController = jasmine.createSpyObj('AlertController', ['create']);

  beforeEach(async () => {
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: { state: { id_usu: 1 } },
    });

    mockServiceBDService.actualizarContrasena.and.returnValue(Promise.resolve());
    mockAlertController.create.and.returnValue(
      Promise.resolve({
        present: jasmine.createSpy('present'),
      })
    );

    await TestBed.configureTestingModule({
      declarations: [NuevaPage],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: AlertController, useValue: mockAlertController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
