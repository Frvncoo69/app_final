import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CrudPage } from './crud.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('CrudPage', () => {
  let component: CrudPage;
  let fixture: ComponentFixture<CrudPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', [
    'seleccionarProductos',
    'eliminarProducto',
    'agregarProducto',
  ]);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  const mockAlertController = jasmine.createSpyObj('AlertController', ['create']);

  beforeEach(async () => {
    mockServiceBDService.seleccionarProductos.and.returnValue(Promise.resolve([
      { id_producto: 1, nombre_prod: 'Producto A', precio: 100 },
      { id_producto: 2, nombre_prod: 'Producto B', precio: 200 },
    ]));
    mockServiceBDService.eliminarProducto.and.returnValue(Promise.resolve());
    mockServiceBDService.agregarProducto.and.returnValue(Promise.resolve());

    mockAlertController.create.and.returnValue(
      Promise.resolve({
        present: () => Promise.resolve(),
        dismiss: () => Promise.resolve(),
      } as any)
    );

    await TestBed.configureTestingModule({
      declarations: [CrudPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: Router, useValue: mockRouter },
        { provide: AlertController, useValue: mockAlertController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
