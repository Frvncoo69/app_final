import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudpcarmadoPage } from './crudpcarmado.page';

describe('CrudpcarmadoPage', () => {
  let component: CrudpcarmadoPage;
  let fixture: ComponentFixture<CrudpcarmadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpcarmadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
