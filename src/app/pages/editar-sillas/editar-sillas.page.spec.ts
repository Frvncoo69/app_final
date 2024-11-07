import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarSillasPage } from './editar-sillas.page';

describe('EditarSillasPage', () => {
  let component: EditarSillasPage;
  let fixture: ComponentFixture<EditarSillasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
