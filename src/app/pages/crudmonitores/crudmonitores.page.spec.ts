import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudmonitoresPage } from './crudmonitores.page';

describe('CrudmonitoresPage', () => {
  let component: CrudmonitoresPage;
  let fixture: ComponentFixture<CrudmonitoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmonitoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
