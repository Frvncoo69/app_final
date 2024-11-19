import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPCPage } from './agregar-pc.page';
import { Router } from '@angular/router';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

describe('AgregarPCPage', () => {
  let component: AgregarPCPage;
  let fixture: ComponentFixture<AgregarPCPage>;
  let routerMock: jasmine.SpyObj<Router>;
  let serviceBDMock: jasmine.SpyObj<ServiceBDService>;
  let camaraServiceMock: jasmine.SpyObj<CamaraService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
    serviceBDMock = jasmine.createSpyObj('ServiceBDService', ['agregarProducto']);
    camaraServiceMock = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);

    await TestBed.configureTestingModule({
      declarations: [AgregarPCPage],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ServiceBDService, useValue: serviceBDMock },
        { provide: CamaraService, useValue: camaraServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

