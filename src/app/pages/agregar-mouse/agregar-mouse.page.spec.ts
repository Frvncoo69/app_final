import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarMousePage } from './agregar-mouse.page';

describe('AgregarMousePage', () => {
  let component: AgregarMousePage;
  let fixture: ComponentFixture<AgregarMousePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
