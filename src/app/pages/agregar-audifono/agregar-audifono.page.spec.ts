import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarAudifonoPage } from './agregar-audifono.page';

describe('AgregarAudifonoPage', () => {
  let component: AgregarAudifonoPage;
  let fixture: ComponentFixture<AgregarAudifonoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAudifonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
