import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPcPage } from './agregar-pc.page';

describe('AgregarPcPage', () => {
  let component: AgregarPcPage;
  let fixture: ComponentFixture<AgregarPcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
