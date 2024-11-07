import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAudifonoPage } from './editar-audifono.page';

describe('EditarAudifonoPage', () => {
  let component: EditarAudifonoPage;
  let fixture: ComponentFixture<EditarAudifonoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAudifonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
