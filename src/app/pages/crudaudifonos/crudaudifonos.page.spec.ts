import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudaudifonosPage } from './crudaudifonos.page';

describe('CrudaudifonosPage', () => {
  let component: CrudaudifonosPage;
  let fixture: ComponentFixture<CrudaudifonosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudaudifonosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
