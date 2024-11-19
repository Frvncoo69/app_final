import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecladosPage } from './teclados.page';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('TecladosPage', () => {
  let component: TecladosPage;
  let fixture: ComponentFixture<TecladosPage>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;

  beforeEach(async () => {
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['seleccionarTeclados']);
    
    await TestBed.configureTestingModule({
      declarations: [TecladosPage],
      providers: [
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: AlertController, useValue: {} },
        { provide: Router, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TecladosPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
