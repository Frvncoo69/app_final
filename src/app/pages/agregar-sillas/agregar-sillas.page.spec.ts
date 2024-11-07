import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarSillasPage } from './agregar-sillas.page';

describe('AgregarSillasPage', () => {
  let component: AgregarSillasPage;
  let fixture: ComponentFixture<AgregarSillasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
