import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarusuariosPage } from './listarusuarios.page';

describe('ListarusuariosPage', () => {
  let component: ListarusuariosPage;
  let fixture: ComponentFixture<ListarusuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
