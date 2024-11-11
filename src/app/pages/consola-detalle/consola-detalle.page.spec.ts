import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsolaDetallePage } from './consola-detalle.page';

describe('ConsolaDetallePage', () => {
  let component: ConsolaDetallePage;
  let fixture: ComponentFixture<ConsolaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
