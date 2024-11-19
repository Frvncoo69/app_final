import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AgregarMonitorPage } from './agregar-monitor.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { Router } from '@angular/router';

describe('AgregarMonitorPage', () => {
  let component: AgregarMonitorPage;
  let fixture: ComponentFixture<AgregarMonitorPage>;

  const mockServiceBDService = {
    agregarProducto: jasmine.createSpy('agregarProducto').and.returnValue(Promise.resolve())
  };

  const mockCamaraService = {
    takePhoto: jasmine.createSpy('takePhoto').and.returnValue(Promise.resolve(new Blob())),
    pickImage: jasmine.createSpy('pickImage').and.returnValue(Promise.resolve(new Blob()))
  };

  const mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarMonitorPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: CamaraService, useValue: mockCamaraService },
        { provide: Router, useValue: mockRouter },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarMonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
