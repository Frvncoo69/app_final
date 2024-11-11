import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPCPage } from './agregar-pc.page';

describe('AgregarPCPage', () => {
  let component: AgregarPCPage;
  let fixture: ComponentFixture<AgregarPCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
