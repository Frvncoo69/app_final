import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudtecladosPage } from './crudteclados.page';

describe('CrudtecladosPage', () => {
  let component: CrudtecladosPage;
  let fixture: ComponentFixture<CrudtecladosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtecladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
