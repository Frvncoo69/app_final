import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarritoPage } from './carrito.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

describe('CarritoPage', () => {
  let component: CarritoPage;
  let fixture: ComponentFixture<CarritoPage>;

  const mockServiceBDService = {
    obtenerIdUsuarioLogueado: jasmine.createSpy('obtenerIdUsuarioLogueado').and.returnValue(Promise.resolve(1)),
    verificarOCrearVenta: jasmine.createSpy('verificarOCrearVenta').and.returnValue(Promise.resolve(101)),
    obtenerCarroPorUsuario: jasmine.createSpy('obtenerCarroPorUsuario').and.returnValue(Promise.resolve([
      { id_producto: 1, nombre: 'Producto 1', cantidad_d: 2, subtotal: 20, estatus_prod: 1 },
      { id_producto: 2, nombre: 'Producto 2', cantidad_d: 0, subtotal: 0, estatus_prod: 0 }
    ])),
    restarStock: jasmine.createSpy('restarStock').and.returnValue(Promise.resolve()),
    agregarCantidad: jasmine.createSpy('agregarCantidad').and.returnValue(Promise.resolve()),
    restarCantidad: jasmine.createSpy('restarCantidad').and.returnValue(Promise.resolve()),
    vaciarCarrito: jasmine.createSpy('vaciarCarrito').and.returnValue(Promise.resolve()),
    preciofinal: jasmine.createSpy('preciofinal').and.returnValue(Promise.resolve(40)),
    eliminarProductoDelCarrito: jasmine.createSpy('eliminarProductoDelCarrito').and.returnValue(Promise.resolve()),
    registrarVenta: jasmine.createSpy('registrarVenta').and.returnValue(Promise.resolve(201)),
    registrarDetalle: jasmine.createSpy('registrarDetalle').and.returnValue(Promise.resolve())
  };

  const mockAlertasService = {
    presentAlert: jasmine.createSpy('presentAlert').and.returnValue(Promise.resolve())
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockChangeDetectorRef = {
    detectChanges: jasmine.createSpy('detectChanges')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: AlertasService, useValue: mockAlertasService },
        { provide: Router, useValue: mockRouter },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
