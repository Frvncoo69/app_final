import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RetiroPage } from './retiro.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';

describe('RetiroPage', () => {
  let component: RetiroPage;
  let fixture: ComponentFixture<RetiroPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', [
    'obtenerIdUsuarioLogueado',
    'consultarRetiros'
  ]);

  beforeEach(async () => {
    mockServiceBDService.obtenerIdUsuarioLogueado.and.returnValue(Promise.resolve(1));
    mockServiceBDService.consultarRetiros.and.returnValue(Promise.resolve([
      { id_venta: 101, total_venta: 1500, estado_retiro: true },
      { id_venta: 102, total_venta: 2500, estado_retiro: false }
    ]));

    await TestBed.configureTestingModule({
      declarations: [RetiroPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RetiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

