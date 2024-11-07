import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPorCategoriaPage } from './productos-por-categoria.page';

describe('ProductosPorCategoriaPage', () => {
  let component: ProductosPorCategoriaPage;
  let fixture: ComponentFixture<ProductosPorCategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPorCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
