import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';
import { of } from 'rxjs';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
  const mockActivatedRoute = {
    params: of({}), // Simula un observable vacío para `params`
    queryParams: of({}) // Simula un observable vacío para `queryParams`
  };
  const mockToastController = jasmine.createSpyObj('ToastController', ['create']);
  const mockActionSheetController = jasmine.createSpyObj('ActionSheetController', ['create']);
  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', ['modificarProducto']);
  const mockCamaraService = jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarPage],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ToastController, useValue: mockToastController },
        { provide: ActionSheetController, useValue: mockActionSheetController },
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: CamaraService, useValue: mockCamaraService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

