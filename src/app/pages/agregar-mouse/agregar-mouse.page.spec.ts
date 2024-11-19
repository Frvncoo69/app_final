import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarMousePage } from './agregar-mouse.page';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

describe('AgregarMousePage', () => {
  let component: AgregarMousePage;
  let fixture: ComponentFixture<AgregarMousePage>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let camaraServiceMock: jasmine.SpyObj<CamaraService>;

  beforeEach(async () => {
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['agregarProducto']);
    camaraServiceMock = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);

    await TestBed.configureTestingModule({
      declarations: [AgregarMousePage],
      providers: [
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: CamaraService, useValue: camaraServiceMock },
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarMousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
