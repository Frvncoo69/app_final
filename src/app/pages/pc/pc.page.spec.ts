import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PcPage } from './pc.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('PcPage', () => {
  let component: PcPage;
  let fixture: ComponentFixture<PcPage>;

  beforeEach(async () => {
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['seleccionarPC']);

    // Mock para `seleccionarPC`
    serviceBDMock.seleccionarPC.and.returnValue(
      Promise.resolve([
        { id: 1, nombre: 'PC Gamer', precio: 1000 },
        { id: 2, nombre: 'PC Oficina', precio: 500 },
      ])
    );

    await TestBed.configureTestingModule({
      declarations: [PcPage],
      providers: [
        { provide: AlertController, useValue: alertControllerMock },
        { provide: Router, useValue: routerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

