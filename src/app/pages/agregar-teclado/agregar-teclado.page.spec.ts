import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTecladoPage } from './agregar-teclado.page';

describe('AgregarTecladoPage', () => {
  let component: AgregarTecladoPage;
  let fixture: ComponentFixture<AgregarTecladoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTecladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
