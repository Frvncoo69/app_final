import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SillasPage } from './sillas.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('SillasPage', () => {
  let component: SillasPage;
  let fixture: ComponentFixture<SillasPage>;

  beforeEach(async () => {
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['seleccionarSillas']);

    await TestBed.configureTestingModule({
      declarations: [SillasPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

