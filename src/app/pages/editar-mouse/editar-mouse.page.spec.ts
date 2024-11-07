import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarMousePage } from './editar-mouse.page';

describe('EditarMousePage', () => {
  let component: EditarMousePage;
  let fixture: ComponentFixture<EditarMousePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
