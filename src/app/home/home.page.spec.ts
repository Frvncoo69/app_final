import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { ApiNativaService } from 'src/app/services/api-nativa.service';
import { ConsolasService } from 'src/app/services/consolas.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['obtenerTodosLosProductos']);
  const mockConsolasService = jasmine.createSpyObj('ConsolasService', ['getConsolas']);
  const mockApiNativaService = jasmine.createSpyObj('ApiNativaService', ['openIntelPage', 'openAmdPage']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  const mockNavController = jasmine.createSpyObj('NavController', ['navigateForward', 'navigateBack']);

  beforeEach(async () => {
    mockServiceBDService.obtenerTodosLosProductos.and.returnValue(Promise.resolve([
      { id: 1, nombre_prod: 'Producto A', precio: 100 },
      { id: 2, nombre_prod: 'Producto B', precio: 200 },
    ]));
    mockConsolasService.getConsolas.and.returnValue(of([
      { id: 1, nombre: 'Consola A' },
      { id: 2, nombre: 'Consola B' },
    ]));

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: ConsolasService, useValue: mockConsolasService },
        { provide: ApiNativaService, useValue: mockApiNativaService },
        { provide: Router, useValue: mockRouter },
        { provide: NavController, useValue: mockNavController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
