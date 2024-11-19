import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProductosPorCategoriaPage } from './productos-por-categoria.page';
import { ServiceBDService } from 'src/app/services/service-bd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductosPorCategoriaPage', () => {
  let component: ProductosPorCategoriaPage;
  let fixture: ComponentFixture<ProductosPorCategoriaPage>;

  const mockServiceBDService = jasmine.createSpyObj('ServiceBDService', [
    'seleccionarProductosPorCategoria',
    'fetchProductoPorCategoria'
  ]);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
  const mockActivatedRoute = { queryParams: of({}) };

  beforeEach(async () => {
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          productoEnviado: 1
        }
      }
    });

    mockServiceBDService.fetchProductoPorCategoria.and.returnValue(of([
      { id: 1, nombre: 'Producto 1', categoriaId: 1, precio: 100 },
      { id: 2, nombre: 'Producto 2', categoriaId: 1, precio: 200 }
    ]));

    await TestBed.configureTestingModule({
      declarations: [ProductosPorCategoriaPage],
      providers: [
        { provide: ServiceBDService, useValue: mockServiceBDService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosPorCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
