import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTecladoPage } from './agregar-teclado.page';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

describe('AgregarTecladoPage', () => {
  let component: AgregarTecladoPage;
  let fixture: ComponentFixture<AgregarTecladoPage>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let camaraServiceMock: jasmine.SpyObj<CamaraService>;

  beforeEach(async () => {
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['agregarProducto']);
    camaraServiceMock = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);
    
    await TestBed.configureTestingModule({
      declarations: [AgregarTecladoPage],
      providers: [
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: CamaraService, useValue: camaraServiceMock },
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarTecladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
