import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPcPage } from './editar-pc.page';

describe('EditarPcPage', () => {
  let component: EditarPcPage;
  let fixture: ComponentFixture<EditarPcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
