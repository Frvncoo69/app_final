import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { CamaraService } from 'src/app/services/camara.service';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarPage],
      providers: [
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']) },
        { provide: ToastController, useValue: jasmine.createSpyObj('ToastController', ['create']) },
        { provide: ActionSheetController, useValue: jasmine.createSpyObj('ActionSheetController', ['create']) },
        { provide: ServiceBDService, useValue: jasmine.createSpyObj('ServiceBDService', ['modificarProducto']) },
        { provide: CamaraService, useValue: jasmine.createSpyObj('CamaraService', ['takePhoto', 'pickImage']) },
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

