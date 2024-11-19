import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AgregarAudifonoPage } from './agregar-audifono.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { Router } from '@angular/router';

describe('AgregarAudifonoPage', () => {
  let component: AgregarAudifonoPage;
  let fixture: ComponentFixture<AgregarAudifonoPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['agregarProducto']);
  const mockCamaraService = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    mockServiceBDService.agregarProducto.and.returnValue(Promise.resolve());
    mockCamaraService.takePhoto.and.returnValue(Promise.resolve(new Blob()));
    mockCamaraService.pickImage.and.returnValue(Promise.resolve(new Blob()));

    await TestBed.configureTestingModule({
      declarations: [AgregarAudifonoPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: CamaraService, useValue: mockCamaraService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarAudifonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
